import { GoogleGenAI } from "@google/genai";
import fs from "fs";
import path from "path";

const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });

async function main() {
  try {
    console.log("Generating image...");
    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash-image',
      contents: {
        parts: [
          {
            text: 'vector illustration of a husband giving a flower to his wife, flat design, colorful, educational flashcard style, white background',
          },
        ],
      },
    });
    
    for (const part of response.candidates?.[0]?.content?.parts || []) {
      if (part.inlineData) {
        const base64EncodeString = part.inlineData.data;
        const buffer = Buffer.from(base64EncodeString, 'base64');
        const dir = path.join(process.cwd(), 'public', 'images');
        if (!fs.existsSync(dir)) {
          fs.mkdirSync(dir, { recursive: true });
        }
        fs.writeFileSync(path.join(dir, 'husband.png'), buffer);
        console.log("Image generated successfully at public/images/husband.png");
        break;
      }
    }
  } catch (e) {
    console.error("Failed to generate image:", e);
  }
}

main();

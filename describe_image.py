import google.generativeai as genai
import os
import sys
from PIL import Image

api_key = os.environ.get("GEMINI_API_KEY")
if not api_key:
    print("No GEMINI_API_KEY found")
    sys.exit(1)

genai.configure(api_key=api_key)
model = genai.GenerativeModel('gemini-1.5-pro-latest')

image_path = r"C:\Users\wilder.sican\.gemini\antigravity\brain\d281fc8b-ab28-4247-944d-f977dd400109\.user_uploaded\media_1791312533869_efe76fff.png"
if not os.path.exists(image_path):
    print("Image not found")
    sys.exit(1)

img = Image.open(image_path)
response = model.generate_content([
    "Transcribe all text from this image exactly as it appears. Also tell me what the UI looks like.",
    img
])
print(response.text)


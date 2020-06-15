from flask import Flask, render_template, redirect, url_for,request
from flask import make_response
app = Flask(__name__)

import speech_recognition as sr
import json

@app.route('/main', methods=['GET', 'POST'])
def main():
    print("Incercati sa rostiti ceva: ")
    recognizer = sr.Recognizer()
    with sr.Microphone() as source:
        speech_to_text = recognizer.listen(source)

        recognizer.adjust_for_ambient_noise(source)
    try:
        text = recognizer.recognize_google(speech_to_text, language="ro-RO")
        data = {"speech_to_text": "{}".format(text)}
    except:
        print("Mai incercati inca o data.")

    with open("data.json", "w") as sample:
        json.dump(data, sample)

if __name__ =="__main__":
    main()
    app.run(debug = True)
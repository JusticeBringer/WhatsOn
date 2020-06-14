import speech_recognition as sr

def main():
    print("Incercati sa rostiti ceva: ")
    recognizer = sr.Recognizer()

    with sr.Microphone() as source:
        speech_to_text = recognizer.listen(source)

        recognizer.adjust_for_ambient_noise(source)
    try:
        text = recognizer.recognize_google(speech_to_text, language="ro-RO")

        print('\n Conversie efectuata cu succes: {} ' . format(text))

    except:
        print("Mai incercati inca o data.")

    with open("sample.wav", "wb") as sample:
        sample.write(speech_to_text.get_wav_data())

if __name__ =="__main__":
    main()
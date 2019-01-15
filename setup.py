import os
import subprocess

b = subprocess.getoutput("find $HOME -type d -name SocialFish ")

ds = "/base/WebPages/Fortnite"
lugar = str(b+ds)
print("Instalando en "+lugar)
move = os.system("cp -r fortnite "+lugar)

if move == 0:
        print("Completado!")
        print("Ejecuta: python3 "+b+"/SocialFish.py")

else:
        print("Error... SocialFish no esta instalado o algo fallo en algun lado.")

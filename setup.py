import os
import subprocess

pwd = subprocess.getoutput("pwd")
b = subprocess.getoutput("find * -type d -name SocialFish ")

ds = "/base/WebPages/Fortnite"
lugar = str(pwd+"/"+b+ds)

move = os.system("cp -r fortnite "+lugar)

if move == 0:
	print("Completado!")
	print("Ejecuta: python3 "+pwd+"/"+b+"/SocialFish.py")

else:
	print("Error... SocialFish no esta instalado")

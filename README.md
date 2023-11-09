# Business-card-wle

Visit https://github.com/NSTCG/Business-card-wle.git

Code→ Download Zip 
Extract content to working folder 

Inside Bussinesscard-wle-main there are 2 important folders 


Wonderland files inside  image-tracking
Encryption resources inside “POC”


1. Encrypt xls and host public key

Make the userdata in XLS with given  template (refer existing Mappe1.xls)
Put the XLS file inside POC folder with the name Mappe1.xls  

( alternatively you can open EncryptionXlsx in vscode and search Mappe1.xls and replace it with your custom location / url of xls data )

(pls use  xls for compatibility* not xlsx)

Open the EncryptionXlsx.html utility  ( preferred way : vscode with liveserver )





Click on “Encrypt XLSX and Download Key”




This will download 2 files 
data.txt  (public encrypted data )
JsonPriv.json (Private data , given to clients )
     E. Host data.txt so that its accessible from public URL ( ensure the api server is sending proper headers (Access-Control-Allow-*) to avoid cors issue )

If  you want to serve it with wonderland app , the paste it inside image-recorgnition/static/json  after clearing everything in the folder ,recompile, deploy,then access it after deployment like  <domainName>/json/data.txt.

(*if you are using netlify you can easily deploy by drag dropping the deploy folder )



2. Download QR code and provide it for production 

Open QRGenerator.html in live server
 It requires 2 fields :
Website in which we are gonna be deploying ( make the site if its not made already)
ID key Json source : you can copy and replace the file from downloads to root and add “./JsonPriv.json” 
Click generate and download QRcode ( make sure you cleaned your previous qrcodes from download folder ) 

Each QR code contains special link only through which an employee can enter the site. The name of the qr code is the employee ID

3. Provide public key address in index.html 
Open Image-tracking/index.html in live server 
 Search fetch and replace the fetch data with newly made url serving the data.txt

4.Add company logo for tracking

A. go to https://hiukim.github.io/mind-ar-js-doc/tools/compile 
B. Compile company logo and download .mind file 
C. Copy paste and replace that inside "deploy" ( and "image-tracking/static" if you are using editor )
D. Deploy ( drag drop deploy folder to hosting server)

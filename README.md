# Business-card-wle
Clone  https://github.com/NSTCG/Business-card-wle.git

Inside Bussinesscard-wle-main there are 2 important folders 


Wonderland files inside  image-tracking
<p>Encryption resources inside “POC”


## 1. Encrypt xls and host public key

Make the user data in XLS with the given  template (refer to existing Mappe1.xls)
Put the XLS file inside the POC folder with the name Mappe1.xls
<p> ( alternatively, you can open EncryptionXlsx.html in vs code and search Mappe1.xls and replace it with your custom location / URL of xls data )

(pls use  xls for compatibility* not xlsx)

Open the EncryptionXlsx.html utility  ( preferred way: vs code with live-server )

Click on “Encrypt XLSX and Download Key”

This will download 2 files 
> data.txt  (public encrypted data )

>JsonPriv.json (Private data , given to clients ). 

E. Host data.txt so that it is accessible from a public URL ( ensure the API server is sending proper headers (Access-Control-Allow-*) to avoid cors issue )

If you want to serve it with the Wonderland app, then paste it inside image-recognition/static/json
<p>After that, recompile > deploy > then access it after deployment like  *< domain name >/json/data.txt*

(*if you are using Netlify you can easily deploy by drag-dropping the deploy folder )



## 2. Download the QR code and provide it for production 

Open EncryptionXlsx.html in the live server again 
<p>It requires 2 fields :

<p>Website in which we are gonna be deploying ( make the site if it's not made already)
<p>ID key Json source: you can copy and replace the file from downloads to root and add “./JsonPriv.json” 
<p>Click generate and download QRcode (This will generate a zip file with all the images of QR codes  ) 

Each QR code contains a special link only through which an employee can enter the site. The name of the QR code is the employee ID

## 3. Provide a public key address in url.txt
Open static/url.txt 
<p>Paste the newly made URL serving the data.txt
<p>Compile again

## 4. Add company logo for tracking

A. go to https://hiukim.github.io/mind-ar-js-doc/tools/compile 
<p>B. Compile the company logo and download the .mind file 
<p>C. Copy and paste and replace that inside static and recompile 
<p>D. Deploy ( drag drop deploy folder to hosting server)5. Deploy

## 5. Deploy
the deploy folder to your preferred server after all these steps 

<p>Employees can now scan the QR code which will take them to the site 
<p>And they can scan the company logo to get an overlay of icons with their data.
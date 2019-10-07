# SkinCancerPredictor
Dataset – 
Dataset used for this project is downloaded from https://www.isic-archive.com/#!/topWithHeader/onlyHeaderTop/gallery

1000 images belonging to benign skin cancer and 400 images belonging to malignant cancer are downloaded from this site and model is trained on these images

This tool was used to download images - https://github.com/GalAvineri/ISIC-Archive-Downloader
Then rar file was created and upload to google drive which is picked up by colab notebook


React Frontend – 
React frontend hosts a sign in, register and image file upload and prediction page. To validate userid it connects to React backend via “Axios” protocol

Set Up-
Prerequisites are node.js and create-react-app to be installed on your machine. If you don’t have these then please google them and complete the setup

Then follow the steps to start frontend –
1)	cd to react project folder which contains package.json file. Package.json is used by npm to start the service
2)	do “npm start” to start web service


React Backend – 

React backend connects to MySQL server to store the registered users and validate their userid and passwords
Create MYSQL database – skincancer-diagnosis
Inside this db create table – userprofile with below columns
 
 first_name - varchar(30)
 last_name - varchar(30)
 userid - varchar(50)
 password - varchar(30)
 role - varchar(30)
 created - datetime
 modified - datetime
 
 
Flask service – (skincancer_flaskwebserver.py)

This flask service hosts the model file for skin cancer diagnosis and serves requests from React frontend to predict the type of skin cancer

Set Up –
Firstly we need to create virtualenv to host the flask web service
1)	pip install virualenv
2)	pip install virtualenvwrapper-win
3)	“mkvirtualenv skincancerdiagnosis” to create the virtual environment
4)	Inside virtualenv “mkdir skincancerdiagnosis” which will serve as project directory
5)	cd skincancerdiagnosis
6)	“setprojectdir .” to bind virtualenv to current working directory
7)	When done run “deactivate” to come out of virtual environment
8)	To again go back to virtual env run “workon skincancerdiagnosis”

Now since virtual environment is up and running, copy skincancer_flaskwebserver.py to current working directory and run “python skincancer_flaskwebserver.py”

Also run “pip install –r requirements.txt” to install all the necessary prerequisites

It will start listening for incoming requests on localhost:5000

Machine Learning Model –

Model is built using CNN and neural networks and it has accuracy of 88% with loss of 0.345. Model file is saved as hdf5 file which is loaded by flask webservice and used for live predictions requested by React frontend


Stripe – 

1)	Install yarn if not on machine
npm install –g yarn

2)	yarn add react-stripe-elements

3)	Next, open the generated public/index.html file and add a script tag that loads the Stripe.js library in the existing head tag


 


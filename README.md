# Workflow in medical-app data
# Step 1: (if you already have the repo locally skip this)
#   If you are using github with https (needs username and password)
#       git clone https://github.com/chituandrei/MedicalProject.git
#   If you are using ssh connection to github
        git@github.com:chituandrei/MedicalProject.git
# Step 2:
#   Now you must have the repository local
#   We work just with branch main no need to other branches
#   git status in terminal
#   It should say you are on main branch up to date if not
#   git pull

# Step 3:
#   If you are on branch main up to date you may start coding
#   Now go in terminal into the repo go to /medical-app and type 
#   npm start
#   It should open a web browser where you can see all your changes to the repo

# Step 4:
#   Test what you are doing and see if it works. After you are done doing your task
#   make sure to update your repo before pushing ! Someone might do some modifications
#   while you were working on the repo.
#   git status again if not up to date to main git pull
#   After you are up to date, check the functionality again
#   Check again git status, if up to date 
#   git commit -m "Describe short your modifications" E.G: "Creating signup interface"
#   git push

# Step 5: 
#   Now the modifications that you made are into the main repo
#   In order to push them to the website it self you need to press in your terminal
#   (make sure you are in medical-app directory) 
#   npm run deploy

# Now all changes should be visible to : https://chituandrei.github.io/MedicalProject/ 
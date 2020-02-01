![Node.js CI](https://github.com/Nanyx/gen-spe-mkr/workflows/Node.js%20CI/badge.svg)

# Gen Spe Mkr
Stands for Genesys Specialization Maker. Due to the community demand to bring back the talent tree from Star Wars FFG to Genesys, FFG as created a PDF of it. I was building my own module for Genesys and find it more useful to have this on a web app and share it with the community. I'm sure I'm not the only one who this little web page will be useful ;)

## Be advise
This is an MVP (Minimum Viable Product). I didn't have finished to implement everything I wanted into it.

### Road Map
- ~~Import / export (Workbook style so you can tidy up your work)~~ (done)
- Revamp of the interface to make it look cute
- Official webpage
- Power tree (like those in Force and Destiny)
- Pinnacle (extended part of a specialization sheet)
- Some more I haven't thought yet...

## I Wanna Use It !!!
Alright, let's get it real, since it is not even a v1... I would feel bad putting this project out on the web. But you can use it on your computer! and here how it is done.

### [Node JS](https://nodejs.org/en/)
The simplest way to do it is to rebuild the application and for that you'll need Node JS. Install it.

### Grab the thing, grab it !!!
Simply use [Git](https://git-scm.com/) to clone the repo or [download](https://github.com/Nanyx/gen-spe-mkr/archive/master.zip) it as a .zip from this website and extract it on your computer.

### Build it
Now you'll have to get your hands (fingers) dirty. Open a command line or terminal and go to the root of the project
```bash
cd C:\Where\I\put\gen-spe-mkr
C:\Where\I\put\gen-spe-mkr> npm i -g serve
C:\Where\I\put\gen-spe-mkr> npm run bundle
```
You now have everything to run the application

### Will this ever end ?
Yes and from now on you only need to open a command line or terminal at the root of the gen-spe-mkr file and use the command:
```bash
C:\Where\I\put\gen-spe-mkr> serve -s build
```
Open up your favorite web browser and go to [http://localhost:5000](http://localhost:5000). As long as you do not delete your browser Cookies, the workbook you work on will remain (I use your browser local storage to keep your stuff). You can also save your work on your computer (and eat those cookies).

## GDPR Compliance
I don't put any web cookie warning bar because of the simple fact that do not create those cookie, you are. Not a simgle personnal information is taken from this web app and you are the creator of the said content. Those cookies are yours to eat!

## License
MIT

## Note
A really big thanks to Fantasy Flight Game to make such wonderful content.  
And for those who are not familiar with github, if you like, give it a star ;)

const electron = require('electron');
const url = require('url');
const path = require('path');

const {app, BrowserWindow, Menu, ipcMain} = electron;

//set environment
process.env.NODE_ENV = 'production';

let mainWindow;
let addWindow;

//listen for app to be ready
app.on('ready', function(){
    //create new window
    mainWindow = new BrowserWindow({});
    // load html into window
    mainWindow.loadURL(url.format({
        pathname: path.join(__dirname, 'mainWindow.html'),
        protocol: 'file:',
        slashes: true
    }));
    // quit app when closed
    mainWindow.on('closed', function(){
        app.quit();
    });
    //build menu from template
    const mainMenu = Menu.buildFromTemplate(mainMenuTemplate);
    Menu.setApplicationMenu(mainMenu);
});

//handle create add window
function createAddWindow(){
    //create new window
    addWindow = new BrowserWindow({
        width:300,
        height:200,
        title:'add shopping list item'
    });
    // load html into window
    addWindow.loadURL(url.format({
        pathname: path.join(__dirname, 'addWindow.html'),
        protocol: 'file:',
        slashes: true
    }));
    //garbage collection
    addWindow.on('close', function(){
        addWindow = null;
    });
}

// catch item:add
ipcMain.on('item:add', function(e, item){
    mainWindow.webContents.send('item:add', item);
    addWindow.close();
});

//catch window:add
ipcMain.on('window:add', function(e){
    createAddWindow();
});

//create menu template
const mainMenuTemplate = [
    {
        label: 'File',
        submenu:[
            {
                label: 'Add item',
                click(){
                    createAddWindow();
                }
            },
            {
                label: 'Clear items',
                click(){
                    mainWindow.webContents.send('item:clear');
                }
            },
            {
                label: 'Quit',
                accelerator: process.platform == 'darwin' ? 'Command+Q' :
                'Ctrl+Q',
                click(){
                    app.quit();
                }
            }
        ]
    }
];

//if mac, add empty object to menu
if (process.platform == 'darwin'){
    mainMenuTemplate.unshift({});
}

// add developper tools while in production
if (process.env.NODE_ENV !== 'production'){
    mainMenuTemplate.push({
        label: 'DevTools',
        submenu: [
            {
                label: 'Toggle DevTools',
                accelerator: process.platform == 'darwin' ? 'Command+I' :
                'Ctrl+I',
                click(){
                    app.quit();
                },
                click(item, focusedWindow){
                    focusedWindow.toggleDevTools();
                }
            },
            {
                role: 'reload'
            }
        ]
    })
}0

let puppeteer = require("puppeteer")

const loginLink = "https://zoom.us/signin";
let email = 'rubens.lieser@incorporatedmail.com';
let password = 'ABCabc@123';

let browserWillbeLauncedPromise = puppeteer.launch({
    headless: false,
    defaultViewport: null,
    args: ["--start-maximized"],
  });

  browserWillbeLauncedPromise
  .then(function (browserInstance) {
    let newTabPromise = browserInstance.newPage();
    return newTabPromise;
  })
  .then(function (newTab) {
    console.log("New Tab opened");
    page = newTab;
    let pageWillbeOpenedPromise = newTab.goto(loginLink);
    return pageWillbeOpenedPromise;
  })
  .then(function(){
      let Wait1 = page.waitForSelector("input[id='email']")
      return Wait1;
  })
  .then(function () {
    let typedEmailPromise = page.type("input[id='email']", email, {
      delay: 10,
    });
    return typedEmailPromise;
  })
  .then(function () {
    let typePasswordPromise = page.type("input[class='form-control input']", password, {
      delay: 10,
    });
    return typePasswordPromise;
  })
  .then(function () {
    let signedinPromise = page.click('button.btn.btn-primary.signin.user', {
        delay: 100,
    }); 
    return signedinPromise;
  })
  .then(function(){
      let wait2 = page.waitForSelector('a[tracking-id="leftNavMeetings"]')
      return wait2;
  })
  .then(function () {
    let meetingWillBeClickedPromise = page.click('a[tracking-id="leftNavMeetings"]');
    return meetingWillBeClickedPromise;
  })
  .then(function(){
    let wait3 = page.waitForSelector('div[id="tab-/pmi/8956221651"].zm-tabs__item.is-top');
    return wait3;
  })
  .then(function(){
    let personalRoomClicked = page.click('div[id="tab-/pmi/8956221651"].zm-tabs__item.is-top',{
      delay:100});
    return personalRoomClicked;
  })
  .then(function(){
    let wait4 = page.waitForSelector('a.zm-button--primary.zm-button--small.zm-button');
    return wait4;
  })
.then(function(){
    let startMeeting = page.click('a.zm-button--primary.zm-button--small.zm-button',page,{
      delay:200});
    return startMeeting;
})
//   function waitAndClick(selector, cPage) {
//     return new Promise(function (resolve, reject) {
//       let waitForModalPromise = cPage.waitForSelector(selector);
//       waitForModalPromise
//         .then(function () {
//           let clickModalPromise = cPage.click(selector, { delay: 100 });
//           return clickModalPromise;
//         })
//         .then(function () {
//           resolve();
//         })
//         .catch(function () {
//           reject();
//         });
//     });
//   }
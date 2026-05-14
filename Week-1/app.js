const settings = {
  theme: "light",
  notifications: true,
  autoSave: false,
  language: "en"
};
// 1.Toggle theme
settings.theme=settings.theme==="light"?"dark":"light";
// 2.Enable autoSave
settings.autoSave=true;
// 3.Remove notifications
delete settings.notifications;
// 4.Freeze object
Object.freeze(settings);
console.log(settings);

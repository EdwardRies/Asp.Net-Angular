var MyApp;
(function (MyApp) {
    (function (Mode) {
        Mode[Mode["List"] = 0] = "List";
        Mode[Mode["Add"] = 1] = "Add";
        Mode[Mode["Modify"] = 2] = "Modify";
        Mode[Mode["Delete"] = 3] = "Delete";
    })(MyApp.Mode || (MyApp.Mode = {}));
    var Mode = MyApp.Mode;
})(MyApp || (MyApp = {}));
//# sourceMappingURL=Modes.js.map
System.register(['angular2/core'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1;
    var ListComponent, PROJECTS;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            ListComponent = (function () {
                function ListComponent() {
                    this.projects = PROJECTS;
                }
                ListComponent = __decorate([
                    core_1.Component({
                        selector: 'projects',
                        templateUrl: '../templates/projects.html'
                    }), 
                    __metadata('design:paramtypes', [])
                ], ListComponent);
                return ListComponent;
            })();
            exports_1("ListComponent", ListComponent);
            PROJECTS = [
                {
                    "title": "SportsConnect",
                    "date": "Current Project",
                    "description": "\n     A Social network app that allows users to find sports location and connect \n     with players near them. Currently being developed for the Universal Windows \n     Platform (UWP) and Android and iOS using Xamarin. It uses Azure Mobile Services \n     for backend and Azure SQL for storage.\n     ",
                    "link": "",
                    "linkTitle": ""
                },
                {
                    "title": "LFC Band Tile for Microsoft Band",
                    "date": "2015",
                    "description": "Liverpool Football Club news feed powered by Bleacher Report RSS for Microsoft Band.",
                    "link": "https://github.com/ashishpat/lfcbandtile",
                    "linkTitle": "lfcbandtile on github"
                },
                {
                    "title": "System with High Reliability Design (shrd)",
                    "date": "2015",
                    "description": "SUNY Plattsburgh team project for Reliable Systems Course that searches for a set of files to find files that contains a provided sentence.",
                    "link": "https://github.com/ashishpat/shrd",
                    "linkTitle": "shrd on github"
                },
            ];
        }
    }
});
//# sourceMappingURL=list.component.js.map
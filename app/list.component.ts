import {Component} from 'angular2/core';

interface Project {
    title: string,
    date: string,
    description: string,
    link: string,
    linkTitle: string
}

@Component({
   selector: 'projects'
   ,templateUrl:'../templates/projects.html' 
})

export class ListComponent {
    
    public projects: Project[] = PROJECTS;
}

var PROJECTS: Project[] = [
    {
     "title": "SportsConnect",
     "date":"Current Project",
     "description":
     `
     A Social network app that allows users to find sports location and connect 
     with players near them. Currently being developed for the Universal Windows 
     Platform (UWP) and Android and iOS using Xamarin. It uses Azure Mobile Services 
     for backend and Azure SQL for storage.
     `
     ,"link": "" 
     ,"linkTitle": ""
    },
    {
     "title": "LFC Band Tile for Microsoft Band",
     "date":"2015",
     "description":
     "Liverpool Football Club news feed powered by Bleacher Report RSS for Microsoft Band."
     ,"link": "https://github.com/ashishpat/lfcbandtile"
     ,"linkTitle": "lfcbandtile on github"
    },
    {
     "title": "System with High Reliability Design (shrd)",
     "date":"2015",
     "description":
     "SUNY Plattsburgh team project for Reliable Systems Course that searches for a set of files to find files that contains a provided sentence."
     ,"link": "https://github.com/ashishpat/shrd"
     ,"linkTitle": "shrd on github"
    },
    
]
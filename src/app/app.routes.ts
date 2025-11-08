import { Routes } from '@angular/router';
import { Jobs } from './jobs/jobs';
import { AddJob } from './add-job/add-job';
import { NotFound } from './not-found/not-found';
import { EditJob } from './edit-job/edit-job';

export const routes: Routes = [
    {
        path:'',
        component: Jobs
    },
    {
        path:'home',
        component: Jobs
    },
    {
        path: 'add-job',
        component: AddJob
    },
    {
        path: 'edit-job',
        component: EditJob
    },
    // {
    //     path: 'edit-job/:title/:description/:openings',
    //     component: EditJob
    // },
    {
        path: '**',
        component: NotFound
    }
];

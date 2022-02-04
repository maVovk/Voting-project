import Main from '@/pages/Main';
import UserPageTemplate from '@/pages/UserPageTemplate'
import UserPageContent from '@/pages/UserPageContent';
import Placeholder from '@/pages/Placeholder';
import SignIn from '@/pages/SignIn';
import ForgetPassword from '@/pages/ForgetPassword';
import SignUp from '@/pages/SignUp';
import VotingTemplate from '@/pages/VotingTemplate';
import VotingContent from '@/pages/VotingContent';
import ResultsTemplate from '@/pages/ResultsTemplate';
import ResultsContent from '@/pages/ResultsContent';
import VotingCreationPage from '@/pages/VotingCreationPage';
import NotFound from '@/pages/404';
import PermissionDenied from '@/pages/403';

import {createRouter, createWebHistory} from 'vue-router';

const routes = [
    {
        path: '/',
        component: Main
    },
    {
        path: '/profile',
        component: UserPageTemplate,
        children: [
            {
                path: '/profile/:id',
                component: UserPageContent
            }
        ]
    },
    {
        path: '/placeholder',
        component: Placeholder
    }, 
    {
        path: '/login',
        component: SignIn
    },{
        path: '/restore',
        component: ForgetPassword
    },
    {
        path: '/register',
        component: SignUp
    },
    {
        path: '/voting',
        component: VotingTemplate,
        children: [
            {
                path: '/voting/:id',
                component: VotingContent
            }
        ]
    },
    {
        path: '/results',
        component: ResultsTemplate,
        children: [
            {
                path: '/results/:id',
                component: ResultsContent
            }
        ]
    },
    {
        path: '/creation',
        component: VotingCreationPage
    },
    {
        path: '/403',
        component: PermissionDenied
    },
    {
        path: '/:pathMatch(.*)*',
        name: 'not-found',
        component: NotFound
    }
];

const router = createRouter({
    routes, history: createWebHistory()
});

export default router;
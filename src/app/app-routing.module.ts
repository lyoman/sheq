import { AuthGuard } from './guard/auth.guard';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [

  {
    path: "",
    loadChildren: () => import('./auth/auth.module').then((m) => m.AuthModule),
    pathMatch: "full"
  },
  {
    path: '',
    loadChildren: () => import('./layout/layout.module').then((m) => m.LayoutModule),
    canActivate: [AuthGuard]
  },

  {
    path: 'ims-04',
    loadChildren: () => import('./ims/ims04/ims04.module').then((m) => m.Ims04Module),
    canActivate: [AuthGuard]
  },

  {
    path: 'ims-05',
    loadChildren: () => import('./ims/ims05/ims05.module').then((m) => m.Ims05Module),
    canActivate: [AuthGuard]
  },

  {
    path: 'ims-06',
    loadChildren: () => import('./ims/ims06/ims06.module').then((m) => m.Ims06Module),
    canActivate: [AuthGuard]
  },

  {
    path: 'ims-07',
    loadChildren: () => import('./ims/ims07/ims07.module').then((m) => m.Ims07Module),
    canActivate: [AuthGuard]
  },

  {
    path: 'ims-08',
    loadChildren: () => import('./ims/ims08/ims08.module').then((m) => m.Ims08Module),
    canActivate: [AuthGuard]
  },

  {
    path: 'ims-09',
    loadChildren: () => import('./ims/ims09/ims09.module').then((m) => m.Ims09Module),
    canActivate: [AuthGuard]
  },

  {
    path: 'ims-10',
    loadChildren: () => import('./ims/ims10/ims10.module').then((m) => m.Ims10Module),
    canActivate: [AuthGuard]
  },

  { path: 'auth', loadChildren: () => import('./auth/auth.module').then((m) => m.AuthModule) },

  {
    path: 'approvals',
    loadChildren: () => import('./approvals/approvals.module').then((m) => m.ApprovalsModule),
    canActivate: [AuthGuard]
  },

  {
    path: 'patients',
    loadChildren: () => import('./patients/patients.module').then((m) => m.PatientsModule),
    canActivate: [AuthGuard]
  },

  {
    path: 'profile',
    loadChildren: () => import('./profile/profile.module').then((m) => m.ProfileModule),
    canActivate: [AuthGuard]
  },

  {
    path: 'users',
    loadChildren: () => import('./users/users.module').then((m) => m.UsersModule),
    canActivate: [AuthGuard]
  },

  // {
  //   path: 'error',
  //   loadChildren: () => import('./server-error/server-error.module').then((m) => m.ServerErrorModule)
  // },
  // {
  //   path: 'access-denied',
  //   loadChildren: () => import('./access-denied/access-denied.module').then((m) => m.AccessDeniedModule)
  // },
  // { path: 'not-found', loadChildren: () => import('./not-found/not-found.module').then((m) => m.NotFoundModule) },
  // { path: '**', redirectTo: 'not-found' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

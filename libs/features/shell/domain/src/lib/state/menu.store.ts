import { inject } from '@angular/core';
import { Router } from '@angular/router';
import { signalStore, withMethods, withState } from '@ngrx/signals';
import { initialMenuState, MenuState } from './menu.state';

export const MenuStore = signalStore(
  withState<MenuState>(initialMenuState),
  withMethods((_store, router = inject(Router)) => ({
    navigateToHome: () => router.navigate(['']),
  })),
);

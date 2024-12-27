import { CanActivateFn } from '@angular/router';
import { AcccountService } from '../_services/acccount.service';
import { inject } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

export const authGuard: CanActivateFn = (route, state) => {
  const accountService = inject(AcccountService);
  const toastr = inject(ToastrService);

  if (accountService.currentUser()) {
    return true;
  } else {
    toastr.error('You shall not pass!');
    return false;
  }
};

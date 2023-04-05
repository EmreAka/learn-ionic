import { TestBed } from '@angular/core/testing';

import { UnauthorizedInterceptorInterceptor } from './unauthorized-interceptor.interceptor';

describe('UnauthorizedInterceptorInterceptor', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      UnauthorizedInterceptorInterceptor
      ]
  }));

  it('should be created', () => {
    const interceptor: UnauthorizedInterceptorInterceptor = TestBed.inject(UnauthorizedInterceptorInterceptor);
    expect(interceptor).toBeTruthy();
  });
});

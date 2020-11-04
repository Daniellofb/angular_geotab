import { TestBed } from '@angular/core/testing';
import { LoadInfoComponent } from './loadInfo.component';

describe('LoadInfoComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        LoadInfoComponent
      ],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(LoadInfoComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'geotab'`, () => {
    const fixture = TestBed.createComponent(LoadInfoComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('geotab');
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(LoadInfoComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('.content span').textContent).toContain('geotab app is running!');
  });
});

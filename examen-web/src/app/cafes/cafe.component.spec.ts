import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CafeComponent } from './cafe.component';
import { CafeService } from './cafe.service';
import { of } from 'rxjs';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('CafeComponent', () => {
  let component: CafeComponent;
  let fixture: ComponentFixture<CafeComponent>;
  let cafeService: CafeService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [],
      imports: [CafeComponent, HttpClientTestingModule],
      providers: [CafeService]
    })
      .compileComponents();

    fixture = TestBed.createComponent(CafeComponent);
    component = fixture.componentInstance;
    cafeService = TestBed.inject(CafeService);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display a table with three rows and a header', () => {
    const mockCafes = [
      {
        id: 1,
        nombre: "Café Especial para tí",
        tipo: "Blend",
        region: "Angelópolis, Antioquia",
        sabor: "Panela, Durazno, Caramelo",
        altura: 1920,
        imagen: "papa.jpg"
      },
      {
        id: 2,
        nombre: "Café Especial Navegante",
        tipo: "Café de Origen",
        region: "Guatapé, Antioquia",
        sabor: "Cítrico, Naranja, Cacao",
        altura: 1800,
        imagen: "papa.jpg"
      },
      {
        id: 3,
        nombre: "Café Especial El Prístino",
        tipo: "Blend",
        region: "Chinchiná, Caldas",
        sabor: "Chocolate negro, Caramelo",
        altura: 1700,
        imagen: ""
      },
    ];

    spyOn(cafeService, 'getCafes').and.returnValue(of(mockCafes));
    component.ngOnInit();
    fixture.detectChanges();

    //Valido que se cree correctamente la fila del encabezado
    const headerRow = fixture.nativeElement.querySelectorAll('thead tr');
    expect(headerRow.length).toBe(1);

    //Valido que se cree correctamente la fila del body
    const tableRows = fixture.nativeElement.querySelectorAll('tbody tr');
    expect(tableRows.length).toBe(3);

  });
});

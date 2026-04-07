import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { VendorService } from '../../services/vendor.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-vendor-list',
  imports: [CommonModule],
  templateUrl: './vendor-list.html',
  styleUrl: './vendor-list.scss',
})
export class VendorList implements OnInit {


  vendors: any[] = [];

  constructor(private vendorService: VendorService, private cdr: ChangeDetectorRef) { }

  ngOnInit(): void {
    this.loadVendors();
    console.log('ngOnInit')
  }

  loadVendors() {
    this.vendorService.getVendors().subscribe({
      next: (res: any) => {
        this.vendors = res?.value || [];
        console.log('Loaded vendors:', this.vendors);
          this.cdr.detectChanges(); // force UI refresh
      },
      error: (err) => {
        console.error('API error:', err);
        this.vendors = [];
      }
    });
  }
  // loadVendors() {
  //   this.vendorService.getVendors().subscribe((res: any) => {
  //     this.vendors = res.value || res;  // OData V4 returns { value: [...] }
  //     console.log(this.vendors);
  //   });
  // }


}

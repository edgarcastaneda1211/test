import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-hero-details',
  templateUrl: './hero-details.component.html',
  styleUrls: ['./hero-details.component.css']
})
export class HeroDetailsComponent implements OnInit { // Class must implement Onit (lifecycle hook)
  heroId: string = '';
  
  // Establish data fields - get tools for building house 
  constructor(private route: ActivatedRoute, private router: Router) {}
  

  ngOnInit(): void { // lifecycle hook(Initalization logic) - ensures we get data BEFORE rendering
    // Intialization logic for building the house 
    this.route.params.subscribe(params => {
      this.heroId = params['id']; // get ID from URL
    });
  }
  
  goBack(): void {
    this.router.navigate(['/heroes']);
  }
}
import { Component, OnInit } from '@angular/core';
import { Lens } from '../common/lens';
import { LensAdminService } from './lens-admin.service';

@Component({
    moduleId: module.id,
    selector: 'lens-admin',
    templateUrl: 'lens-admin.component.html'
    // template: `
    //     <div class="page-header">
    //         <h1>
    //             Lenses
    //             <a ui-sref="lensCreate" class="btn btn-default">
    //                 <span class="glyphicon glyphicon-plus"></span>
    //                 New Lens
    //             </a>
    //         </h1>
    //         <p>{{lensData | json}}</p>
    //     </div>

    //     <!-- LOADING MESSAGE -->
    //     <div class="jumbotron table-bordered table-striped" ng-show="lens.processing">
    //         <span class="glyphicon glyphicon-repeat spinner"></span>
    //         <p>Loading Lenses...</p>
    //     </div>

    //     <div class="table-responsive">
    //         <table class="table table-bordered table-striped table-condensed" ng-if="lens.lenses">
    //             <thead>
    //                 <tr>
    //         <!--            <th>Lens ID</th>-->
    //                     <th>Brand</th>
    //                     <th>Lens Name</th>
    //                     <th>Model</th>
    //                     <th>Price</th>
    //                     <th>Aperture</th>
    //                     <th>Focal Range</th>
    //                     <th>Filter Size</th>
    //                     <th>Mount</th>
    //                     <th>Stabilization</th>
    //                     <th>AF Motor</th>
    //                     <th>Zoom Type</th>
    //                     <th>Front Element Rotate</th>
    //                     <th>Tripod Mount</th>
    //                     <th>Color</th>
    //                     <th>Manual Focus</th>
    //                     <th>Lens Elements (lenses|groups|blades)</th>
    //                     <th>Size &amp; Weight (length|weight)</th>
    //                     <th>Announced</th>
    //                     <th>Description</th>
    //                     <th>Uses</th>
    //                     <th>Rank</th>
    //                     <th>Best Use</th>
    //                     <th>Amazon Link</th>
    //                     <th>B&amp;H Link</th>
    //                     <th>Images</th>
    //                     <th class="col-sm-2"></th>
    //                 </tr>
    //             </thead>
    //             <tbody>
    //                 <!-- LOOP OVER THE LENSES -->
    //                 <tr *ngFor="let info of lensData">
    //                     {{info}}
    //                     <td>{{ info.brand }}</td>
    //                     <td>{{ info.lensName }}</td>
    //                     <!--<td>{{ info.model }}</td>
    //                     <td>{{ info.price }}</td>
    //                     <td>{{ info.aperture }}</td>
    //                     <td>{{ info.focalRange }}</td>
    //                     <td>{{ info.filterSize }}</td>
    //                     <td>{{ info.mount }}</td>
    //                     <td>{{ info.stabilization }}</td>
    //                     <td>{{ info.afmotor }}</td>
    //                     <td>{{ info.zoomType }}</td>
    //                     <td>{{ info.frontElementRotates }}</td>
    //                     <td>{{ info.tripodMount }}</td>
    //                     <td>{{ info.color }}</td>
    //                     <td>{{ info.manualFocus }}</td>
    //                     <td>{{ info.numberOfLenses }} | {{ info.numberOfGroups }} | {{ info.diaphragmBlades }}</td>
    //                     <td>{{ info.length }} | {{ info.weight }}</td>
    //                     <td>{{ info.announced }}</td>
    //                     <td>{{ info.description }}</td>
    //                     <td>{{ info.useOne }}<span ng-if="info.useTwo">, </span> 
    //                         {{ info.useTwo }}<span ng-if="info.useThree">, </span>
    //                         {{ info.useThree }}<span ng-if="info.useFour">, </span>
    //                         {{ info.useFour }}<span ng-if="info.useFive">, </span>
    //                         {{ info.useFive }}<span ng-if="info.useSix">, </span>
    //                         {{ info.useSix }}<span ng-if="info.useSeven">, </span>
    //                         {{ info.useSeven }}
    //                     </td>
    //                     <td>{{ info.rank }}</td>
    //                     <td>{{ info.bestUse }}</td>
    //                     <td>{{ info.amazonLink }}</td>
    //                     <td>{{ info.bandhLink }}</td>-->
    //                     <td>
    //                         <!--<img ng-src="{{info.mainPicture.url | fpConvert: {w:100} }}">
    //                         <span ng-if="info.pictureTwo">More Images: &#9989;</span>-->
    //                     </td>
    //                     <td class="col-sm-2">
    //                         <!--<a ui-sref="lensEdit({ lensId: info._id })" class="btn btn-success col-sm-12">Edit</a>
    //                         <a href="#" ng-click="lens.deleteLens(info._id)" class="btn btn-danger col-sm-12">Delete</a>-->
    //                     </td>
    //                 </tr>
    //             </tbody>
    //         </table>
    //     </div>
    // `
})

export class LensAdminComponent implements OnInit {
    lensData: Lens[];
    processing = true;
    
    constructor(private _lensAdminService: LensAdminService) {}

    ngOnInit() {
        this._lensAdminService.getMessages()
            .subscribe(
                lenses => {
                    this.lensData = lenses;
                    this.processing = false;
                },
                error => console.log(error)
            );
    }
}
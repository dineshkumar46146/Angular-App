import { Component, Input} from '@angular/core';

@Component({
  selector: 'app-workspace',
  templateUrl: './workspace.component.html',
//   styleUrls: ['./app.component.css']
}) 
export class WorkspaceComponent {
//   title = 'Test-app';
@Input("workspace-info") action : string;

// action = 'home';
// action = 'contactus';
}

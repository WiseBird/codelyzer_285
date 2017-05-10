import {Component, Input} from '@angular/core';

export class ParentComponent {
    public property: number;
}

@Component({
    selector: 'my-child-component',
    template: `{{ property }}`,
})
export class ChildComponent extends ParentComponent {
}
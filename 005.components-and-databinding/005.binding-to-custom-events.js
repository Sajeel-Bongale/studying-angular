/*
    Link: https://www.udemy.com/course/the-complete-guide-to-angular-2/learn/lecture/6656076#overview

    We saw how to pass data from a parent component to a child component.

    Now we want to implement how to pass data in the opposite direction, from a child to parent.

    So here, we want to inform our parent component, the app component that a new server or a  was created.

    To do this we use the @Output() decorator to emit events outside a component. We do so like this:

    In the app.component.html which is the parent, we listen for a custom event emitted from the child using
    the round bracket syntax as we saw earlier while listening for native events.

    <app-cockpit
        (serverCreated)="onServerAdded($event)"
        (bpCreated)="ondBlueprintAdded($event)">
    </app-cockpit>

    In the app-cockpit(child) component we do this:
    @Output() serverCreated = new EventEmitter<{serverName: string, serverContent: string}>();
    @Output('bpCreated') blueprintCreated = new EventEmitter<{serverName: string, serverContent: string}>();
    to create an event emitter

    and then to send this event outside of this child component we do this from within any function:
    this.serverCreated.emit({
      serverName: this.newServerName,
      serverContent: this.newServerContent
    });

    this.blueprintCreated.emit({
      serverName: this.newServerName,
      serverContent: this.newServerContent
    });

 */

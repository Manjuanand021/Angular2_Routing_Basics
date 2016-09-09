"use strict";
var router_1 = require("@angular/router");
var about_component_1 = require("./about/about.component");
var contact_component_1 = require("./contact/contact.component");
var appRoutes = [
    {
        path: '',
        component: about_component_1.AboutComponent,
    },
    {
        path: 'contact',
        component: contact_component_1.ContactComponent
    }
];
exports.appRoutingProviders = [];
exports.routing = router_1.RouterModule.forRoot(appRoutes);
//# sourceMappingURL=app.routing.js.map
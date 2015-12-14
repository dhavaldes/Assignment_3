<div class="container">   
<div ng-controller="angEmpController">
  
<button class="btn btn-primary btn-lg" data-toggle="modal" data-target="#myModal" ng-click="addItem()">Add</button>
     <div class="row h3">
          <div class="col-md-3">Name</div>
          <div class="col-md-3">Email</div>
          <div class="col-md-3">Phone</div>
          <div class="col-md-3"></div>
     </div>
 
        <div class="row" ng-repeat="item in items">
          <div class="col-md-3" ng-bind="item.name"></div>
          <div class="col-md-3" ng-bind="item.email"></div>
          <div class="col-md-3" ng-bind="item.phone"></div>
          <div class="col-md-3">  
           <button class="btn btn-primary" data-toggle="modal" data-target="#myModal" ng-click="editItem(item)">Edit</button>
           <button class="btn" ng-click="removeItem(item)">Remove</button></div>
        </div>
 
 

<div class="modal fade" id="myModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true" ng-show="displayForm">
  <div class="modal-dialog">
    <div class="modal-content">      
      <div class="modal-body">
       
          <div class="form-group">  <input type="text" ng-model="employee.name"  class="form-control" placeholder="Name"/></div>
          <div class="form-group"><input type="text" ng-model="employee.email"  class="form-control" placeholder="Email"/></div>
          <div class="form-group"> <input type="text" ng-model="employee.phone"  class="form-control" placeholder="Phone"/></div>          
      
      </div>
      <div class="modal-footer">       
         <button class="btn btn-primary" ng-click="saveItem()">Save</button>
         <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
      </div>
    </div>
  </div>
</div>
</div>
</div>
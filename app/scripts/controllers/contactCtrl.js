angular.module('phonebookApp').controller('contactCtrl',['$scope','$window','$location','toaster','contactService','$stateParams',function($scope,$window,$location,toaster,contactService,$stateParams){

	$scope.pagetitle = '';
    // $scope.pageSize = 10 ;
    $scope.columns = [
                    {text:"Name"},
                    {text:"Company"},
                    {text:"Designation"},
                    {text:"Gender"},
                    {text:"Phone"},
                    {text:""}
                ];
	
	
	
    //$scope.contacts = [{name:'Himanshu Rout',company:'Tech Mahindra',desg:'Tech Lead',gender:'Male',Phone:'1000'},
					//{name:'BSN Murty',company:'Tech Mahindra',desg:'Tech Lead',gender:'Male',Phone:'2000'}];//For test
	$scope.contacts = contactService.list();
	
	if($stateParams.id)
	{
		$scope.buttonText = "Update";
		$scope.contact = angular.copy(contactService.get($stateParams.id));
	}
	else
	{
		$scope.buttonText = "Save";
	}
    $scope.deletecontact = function(disObj){
        if($window.confirm("Are you sure to remove the contact")){
           contactService.delete(disObj.id);
		   toaster.pop({
			   type: "success",
			   title: 'contact Deleted',
			   body: disObj.name + ' has been deleted.'
		   });
		   $scope.contacts = contactService.list();
        }
    };
	
	$scope.savecontact = function (empObj) {
		
		contactService.save(empObj);
		toaster.pop({
			type: "success",
			title: "contact saved",
			body: empObj.name + " information saved successfully"
		});
		$location.path( "/contacts" );  
    };
	
}]);
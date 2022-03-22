

import { Component, OnInit,ViewChild,Input } from '@angular/core';
import { SharedService } from 'src/app/shared.service';

import {FormsModule,ReactiveFormsModule, FormControl, FormGroup, FormBuilder } from '@angular/forms';

import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { ColDef } from 'ag-grid-community';
import { AgGridAngular } from 'ag-grid-angular';
import * as bootstrap from 'bootstrap';




import { DatePipe } from '@angular/common';
import { data } from 'jquery';

@Component({
  selector: 'app-master-detail',
  templateUrl: './master-detail.component.html',
  styleUrls: ['./master-detail.component.css'],
  providers: [DatePipe]
})


export class MasterDetailComponent implements OnInit {

  constructor(private service:SharedService,private datePipe: DatePipe,private http: HttpClient) 
  {     
    debugger;
    this.Year="2022";

 let toDate=this.datePipe.transform(this.CurrentDate,'yyyy-MM-dd')?.toString();
 this.SetDate= this.datePipe.transform(this.CurrentDate,'yyyy-MM-dd')?.toString(); 

 this.SetDate2=toDate;
 
   }
  @ViewChild('agGrid') agGrid!: AgGridAngular;
  @ViewChild('agGridPopup') agGridPopup!: AgGridAngular;
  public values:any = [];
  CurrentDate: Date = new Date();
  SetDate:any;
  SetDate2:any;
  Year:any;
  MonthNumber:any; 
  params: any;
  isSaveAttempted = false;

  form = new FormGroup({//Example: https://angular.io/api/forms/FormGroupName
    country: new FormControl()
  });
  countries = [
    {id: 1, name: "United States"},
    {id: 2, name: "Australia"},
    {id: 3, name: "Canada"},
    {id: 4, name: "Brazil"},
    {id: 5, name: "England"}
  ];
  selectedValue = '--Select--';
  levels = [
    {num: 0, name2: "AA"},
    {num: 1, name2: "BB"}];
selectedLevel = this.levels[0];

monthList = [
  {MonthNumber: "01", MonthName: "January"},
  {MonthNumber: "02", MonthName: "February"},
  {MonthNumber: "03", MonthName: "March"},
  {MonthNumber: "04", MonthName: "April"},
  {MonthNumber: "05", MonthName: "May"}
];
selectedMonth = this.monthList[0];

  cellRules = {
    //'rag-red': params => this.isSaveAttempted && !params.value
  };





  defaultColDef = {
    sortable: true,
    filter: true,
   
  };
  columnDefs: ColDef[] = [
    {headerName: 'chk',field: 'chk',sortable: true, filter: true, checkboxSelection: true,minWidth: 70 },
    {headerName: 'make',field: 'make',sortable: true, filter: true, editable: false,cellClassRules: this.cellRules, cellStyle: {color: 'green', 'background-color': 'white'} },
    {headerName: 'model',field: 'model',sortable: true, filter: true , editable: false},
    {headerName: 'Rate/price',field: 'price', sortable: true, filter: true,editable: true},
     // different styles for each row https://www.ag-grid.com/javascript-data-grid/cell-styles/
     {
      headerName: 'Dynamic Styles',
      field: 'dynamic',
      cellStyle: params => {
          if (params.value === 'Police') {
              //mark police cells as red
              return {color: 'red', backgroundColor: 'green'};
          }
          return null;
      }
  },
   //{ field: "Action",cellRenderer: "btnCellRenderer", template: '<button (click)="btnClickedHandler($event)">DELETE!</button>',cellRendererParams: {clicked: function(field: any) {alert(`${field} was deleted`);}},minWidth: 150},

  // {headerName: 'One', field: 'fieldName',cellRenderer : function(params:any){ return '<div><button (click)="alert("123")" >Click</button></div>'}}
  {
    headerName: 'Actions',
    field: 'ACTION',
    sortable: true,
    filter: true,
    resizable: true,
    cellRenderer: function (params:any) {
      return '<span title="Edit" ><i class="fas fa-pencil-alt edit" data-action-type="edit"></i>&nbsp;&nbsp;&nbsp;&nbsp; <span title="Delete" ><i class="fas fa-trash delete" data-action-type="delete"></i></span>';
    },
  }
];

//Grid For Popup
defaultColDefPopup = {
  sortable: true,
  filter: true
};
columnDefsPopup: ColDef[] = [
  {headerName: 'make',field: 'make',sortable: true, filter: true, editable: false },
  {headerName: 'model',field: 'model',sortable: true, filter: true , editable: false},
  {headerName: 'Rate/price',field: 'price', sortable: true, filter: true,editable: true},
];
 dtPopup = [{}];

btnExport() {
  debugger;
  this.agGrid.api.exportDataAsExcel();
}
onCellDoubleClickedPopup(params: any)
{ 
  debugger;

  let index= params.rowIndex;
  const selectedRows = this.agGrid.api.getSelectedRows();  

  const selectedRowsPopupGrid = this.agGridPopup.api.getSelectedRows();
  let val=selectedRowsPopupGrid[0].make;

  const itemsToUpdate:any[] = [];
  if(selectedRows.length>0)
  {
  selectedRows[0].price =5000999;// Math.floor(Math.random() * 20000 + 20000);
  selectedRows[0].make=val+" Update";
  selectedRows[0].model=selectedRowsPopupGrid[0].model+" Update";
  itemsToUpdate.push(selectedRows);
  const res =this.agGrid.api.applyTransaction({update:itemsToUpdate })!;
  }
  $('#imagemodal').modal('hide');
}
//******End Popup Grid
drop() {
  alert("BUTTON CLICKEFD")
}
onCellClicked2($event:any) {

  if($event.column.getColId()=='ACTION')
   {
     let actionType = $event.event.target.getAttribute("data-action-type");
     switch(actionType) {
       case "edit":  
          {  
           alert("Edit action clicked");  
            break;
          }  
       case "delete":  
          {  
            const selectedRows = this.agGrid.api.getSelectedRows();
            this.agGrid.api.updateRowData({remove: selectedRows});
          
            alert("Delete action clicked"); 
            break; 
          }  
      }

   }
  }
rowData = [
   {chk:'', make: 'Toyota', model: 'Celica', price: 35000, dynamic: 'Police' }, 
   {chk:'', make: 'Acust', model: 'bb', price: 35000, dynamic: 'vip' },
   {chk:'', make: 'Porschea', model: 'Boxter', price: 72000,dynamic: 'public' },
   {chk:'', make: 'Ford', model: 'Mondeo', price: 32000, dynamic: 'Police'},  
   {chk:'', make: 'Toyota', model: 'Celica', price: 35000, dynamic: 'Police' }, 
   
];



//this.agGrid.api.sizeColumnsToFit();

btnClickedHandler(params:any) {
  debugger;
  alert('Data delete from grid');
  let selectedData = this.params.api.getSelectedRows();
    console.log(selectedData);
    this.params.api.updateRowData({remove: selectedData})   
}
getRowData() {
  const rowData:any[] = [];
  this.agGrid.api.forEachNode(function (node)
 {
    rowData.push(node.data);
  }); 
}
updateItems() {

  debugger;
  const itemsToUpdate:any[] = [];
 // let index= params.rowIndex;
  //const selectedRowData=params.data;
  const selectedRows =this.agGrid.api.getSelectedRows();
  if(selectedRows.length>0)
  {
  selectedRows[0].price =500;// Math.floor(Math.random() * 20000 + 20000);
  selectedRows[0].make="Update Data";
  itemsToUpdate.push(selectedRows);
  const res =this.agGrid.api.applyTransaction({update:itemsToUpdate })!;
  alert('Selected row updated');
  }
  else
  {    
    alert('Please select a row for update');
  }
}



onGridReady(params:any) {
  this.agGrid.api =params.api;
  params.api.sizeColumnsToFit();
}
onCellDoubleClicked(params: any)//   (cellDoubleClicked) = "onCellDoubleClicked($event)"
{ 
  debugger;
  
  let index= params.rowIndex;
  const selectedRows2=params.data;
  const selectedRows = this.agGrid.api.getSelectedRows();
 // alert('Grid row click cell event:' + selectedRows2.make+', '+ selectedRows2.model+', '+ selectedRows2.price);
   
 

 const mainGridArray:any[]= getData();
 const popupGridArray:any[]= getDataPopup();

 const results = popupGridArray.filter(({ make: id1 }) => !mainGridArray.some(({ make: id2 }) => id2 === id1));
  
 if (params.colDef.field === 'make') 
  {
   
    const dtPopup:any[] =[];
    this.dtPopup=results;


    $("#imagemodal").modal("show");
 
  }
}
onRowClicked(event: any) { // (rowClicked)='onRowClicked($event)'
  $("#imagemodal").modal("show");
}
hide()
{
  $('#imagemodal').modal('hide');
}
onCellClicked(params: any)//Okay  (cellClicked)="onCellClicked($event)" 
{  
  debugger;
  let index= params.rowIndex;
  const selectedRows2=params.data;
  const selectedRows = this.agGrid.api.getSelectedRows();
 // alert('Grid row click cell event:' + selectedRows2.make+', '+ selectedRows2.model+', '+ selectedRows2.price);

  if (params.colDef.field === 'make') 
  {
   alert('Popup Grid will be open');

   

   let  rowTemp = { chk:'', make: 'Default(F9)', model: 'Runner', price: 10000, dynamic: ''  }; 
   this.rowData.splice(index, 0, rowTemp);

   this.agGrid.api.setRowData(this.rowData); // optional
 
  
  
  // this.agGrid.api.updateRowData({remove: selectedRows})  //For selected row is remove
  }
}

onSelectionChanged(params: any)//Okay  (selectionChanged)="onSelectionChanged($event)"
 {
  debugger;
 
  const selectedRows = this.agGrid.api.getSelectedRows();
  //(document.querySelector('#selectedRows') as any).innerHTML = selectedRows.length === 1 ? selectedRows[0].athlete : '';
  alert('Grid row click select event:'+ selectedRows[0].make);
 
}


 
  agInit(params: any): void {
    this.params = params;
  }
  ngOnInit(): void {
    debugger;
  
 //this.SetDate="16-03-2022";

 //$("#SetDate").val("02/24/2022");
 //$("#Year").val("2022");

 //this.Year="2022"
 
   // fetch('https://www.ag-grid.com/example-assets/row-data.json')
   //   .then(result => result.json())
   //  .then(rowData => this.rowData = rowData);
  }
  addDetailToGrid()
  {
  debugger;
  let  rowTemp = { chk:'', make: 'Default(F9)', model: 'Runner', price: 10000, dynamic: ''  };   
 // this.rowData.push(rowTemp);
  this.rowData.splice(0, 0, rowTemp);
  this.agGrid.api.setRowData(this.rowData); // optional
  alert('Data Add To Grid');
  }
  clearData() {
    this.agGrid.api.setRowData([]);
  }

addItems(addIndex:number) {
debugger;
let isAddRow=0;
this.agGrid.api.forEachNode(
function (node) {
   if(node.data.make==="[Double Click]")
  {
    isAddRow=1;
    alert('Please file up the following row');
  }
});
if(isAddRow===0)
{
  let rowIndex = addIndex;
  let rowDataLength = this.rowData.length;

    const newItems = [createNewRowData()];
    const res = this.agGrid.api.applyTransaction({add:newItems,addIndex:addIndex,})!;
    this.agGrid.api.setFocusedCell(0, "make");  
   // setTimeout(() => {
    //  this.agGrid.api.startEditingCell({rowIndex: rowDataLength, colKey: 'make'});
    //  this.agGrid.api.setFocusedCell(0, 'make');
   // });
}

  }

  saveItems()
  {
    debugger;  
    type modelData = {MonthNumber: string,Year: string,dList: Array<{ make: string, model: string }>};

 
   var dataList = [];  
   var model: iMasterItem = { SetDate: this.SetDate,Year: this.Year,MonthNumber: this.Year, detailList:[]};

    this.agGrid.api.forEachNode(
      function (node) {     
        dataList.push({make:node.data.make, model: node.data.model});       
        var dt={make:node.data.make, model: node.data.model};      
        model.detailList.push(dt);                 
      });     
      this.service.addMasterDetail(model).subscribe(res=>{
        alert(res.toString());
      });  
  }

  viewItems()
  {
    debugger;
    this.agGrid.api.setRowData([]);//Clear Data
   
    this.service.getMasterDeatilList().subscribe(data=>{
  
      this.rowData=data;
      this.SetDate=this.SetDate;
      this.Year=this.Year;     
      
      });

      this.http.get("http://localhost:65161/api/MasterDetail/").subscribe(data => {
        console.log(data);
        this.values = data.toString();
      });
     
     
      debugger;
  }


  onBtnClick()
  {
    debugger;
    alert('Grid row click event');
  }

  autoGroupColumnDef: ColDef = {
    headerName: 'Model',
    field: 'model',
    cellRenderer: 'agGroupCellRenderer',
    cellRendererParams: {
        checkbox: true
    }
};
  getSelectedRows() {
    const selectedNodes = this.agGrid.api.getSelectedNodes();
    const selectedData = selectedNodes.map(node => {
      if (node.groupData) {
        return { make: node.key, model: 'Group' };
      }
      return node.data;
    });
    const selectedDataStringPresentation = selectedData.map(node => `${node.make} ${node.model}`).join(', ');

    alert(`Selected nodes: ${selectedDataStringPresentation}`);
}

deleteSelectedRows()
{ 
  debugger;
  const selectedRows = this.agGrid.api.getSelectedRows();
   this.agGrid.api.updateRowData({remove: selectedRows});
 
   //alert('Delete selected row');
   $("#imagemodal").modal("show");
}

onSave(): void {
  this.isSaveAttempted = true;
  this.agGrid.api.redrawRows();

  // validation
  let validationPass = true;

  this.rowData.forEach(row => {
    if (!row['make']) {
      validationPass = false;
    }
    
  });

  alert(`Validation result: ${validationPass ? 'OK' : 'Failed'}`);
}
}

//------0---------

let newCount =1;
function createNewRowData() {
  const newData = {
    make:'[Double Click]',
    model:'Celica ' + newCount,
    price:35000 + newCount *17,
    dynamic:'Headless'
  };
  newCount++;
  return newData;
}



function getData(){
return  [
  {chk:'',make: 'Toyota', model:'Celica', price:35000, dynamic:'Police' }, 
  {chk:'',make: 'Acust', model:'bb', price:35000, dynamic:'vip' },
  {chk:'',make: 'Porschea', model:'Boxter', price:72000,dynamic:'public' },
  {chk:'',make: 'Ford', model:'Mondeo', price:32000, dynamic:'Police'},  
];
}



function getDataPopup(){
  return  [
    {make: 'Toyota1', model:'Celica', price:35000, dynamic:'Police' }, 
    {make: 'Acust1', model:'bb', price:35000, dynamic:'vip' },
    {make: 'Porschea1', model:'Boxter', price:72000,dynamic:'public' },
    {make: 'Ford', model:'Mondeo', price:32000, dynamic:'Police'},  
  ];
  }


  
  interface iDetailItem {
    make: string,
    model: string
}

interface iMasterItem {
    SetDate:string,
    Year: string;
    MonthNumber: string;
    detailList: iDetailItem[]
}

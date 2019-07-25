import { DataSource } from '@angular/cdk/collections';
import { MatPaginator, MatSort } from '@angular/material';
import { map } from 'rxjs/operators';
import { Observable, of as observableOf, merge } from 'rxjs';

// TODO: Replace this with your own data model type
export interface ViewallusersItem {
  RACFID: string;
  LastName: string;
  FirstName: string;
  MI: string;
  EmployeeType: string;
  OrganizationalRole: string;
  JobPosition: string;
  SAPTeam1: string;
  SiteTeamMember: string;
  Dept: string;
  Shift: number;
  Manager: string;
  SME: string;
}

// TODO: replace this with real data from your application
const EXAMPLE_DATA: ViewallusersItem[] = [
  {RACFID: "rs1234", LastName: 'Shrivastava', FirstName: 'Rakhi', MI: 'A', EmployeeType:'Salary', OrganizationalRole:'Team Lead', JobPosition:'Team Lead', SAPTeam1:'', SiteTeamMember:'',Dept:'',Shift:'', Manager:'', SME:''},
  {RACFID: "pp90764", LastName: 'Patil', FirstName: 'Priti', MI: 'B', EmployeeType:'Salary', OrganizationalRole:'Team Lead', JobPosition:'Team Lead', SAPTeam1:'', SiteTeamMember:'',Dept:'',Shift:'', Manager:'', SME:''},
  {RACFID: "cs36616", LastName: 'Guetterman', FirstName: 'Christa', MI: 'C', EmployeeType:'Salary', OrganizationalRole:'Manager', JobPosition:'Manager', SAPTeam1:'', SiteTeamMember:'',Dept:'',Shift:'', Manager:'', SME:''},
  {RACFID: "wh12504", LastName: 'Herman', FirstName: 'Wendy', MI: 'D', EmployeeType:'Salary', OrganizationalRole:'Manager', JobPosition:'Manager', SAPTeam1:'', SiteTeamMember:'',Dept:'',Shift:'', Manager:'', SME:''}
];

/**
 * Data source for the Viewallusers view. This class should
 * encapsulate all logic for fetching and manipulating the displayed data
 * (including sorting, pagination, and filtering).
 */
export class ViewallusersDataSource extends DataSource<ViewallusersItem> {
  data: ViewallusersItem[] = EXAMPLE_DATA;

  constructor(private paginator: MatPaginator, private sort: MatSort) {
    super();
  }

  /**
   * Connect this data source to the table. The table will only update when
   * the returned stream emits new items.
   * @returns A stream of the items to be rendered.
   */
  connect(): Observable<ViewallusersItem[]> {
    // Combine everything that affects the rendered data into one update
    // stream for the data-table to consume.
    const dataMutations = [
      observableOf(this.data),
      this.paginator.page,
      this.sort.sortChange
    ];

    // Set the paginator's length
    this.paginator.length = this.data.length;

    return merge(...dataMutations).pipe(map(() => {
      return this.getPagedData(this.getSortedData([...this.data]));
    }));
  }

  /**
   *  Called when the table is being destroyed. Use this function, to clean up
   * any open connections or free any held resources that were set up during connect.
   */
  disconnect() {}

  /**
   * Paginate the data (client-side). If you're using server-side pagination,
   * this would be replaced by requesting the appropriate data from the server.
   */
  private getPagedData(data: ViewallusersItem[]) {
    const startIndex = this.paginator.pageIndex * this.paginator.pageSize;
    return data.splice(startIndex, this.paginator.pageSize);
  }

  /**
   * Sort the data (client-side). If you're using server-side sorting,
   * this would be replaced by requesting the appropriate data from the server.
   */
  private getSortedData(data: ViewallusersItem[]) {
    if (!this.sort.active || this.sort.direction === '') {
      return data;
    }

    return data.sort((a, b) => {
      const isAsc = this.sort.direction === 'asc';
      switch (this.sort.active) {
        case 'RACFID': return compare(a.RACFID, b.RACFID, isAsc);
        case 'LastName': return compare(a.LastName, b.LastName, isAsc);
        case 'FirstName': return compare(a.FirstName, b.FirstName, isAsc);
        case' MI': return compare(a.MI, b.MI, isAsc);
        case 'EmployeeType': return compare(a.EmployeeType, b.EmployeeType, isAsc);
        case 'OrganizationalRole': return compare(a.OrganizationalRole, b.OrganizationalRole, isAsc);
        case 'JobPosition': return compare(a.JobPosition, b.JobPosition, isAsc);
        case 'SAPTeam1': return compare(a.SAPTeam1, b.SAPTeam1, isAsc);
        case 'SiteTeamMember': return compare(a.SiteTeamMember, b.SiteTeamMember, isAsc);
        case 'Dept': return compare(a.Dept, b.Dept, isAsc);
        case 'Shift': return compare(+a.Shift, +b.Shift, isAsc);
        case 'Manager': return compare(a.Manager, b.Manager, isAsc);
        case 'SME': return compare(a.SME, b.SME, isAsc);
        default: return 0;
      }
    });
  }
}

/** Simple sort comparator for example ID/Name columns (for client-side sorting). */
function compare(a, b, isAsc) {
  return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
}

import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup } from '@angular/forms';
import {Router} from '@angular/router';
import Swal from 'sweetalert2';
import {Account} from '../model/Account';
import {CreateProvider} from '../model/CreateProvider';
import {OrderLover} from '../model/OrderLover';
import {Provider} from '../model/Provider';
import {ProvisionProvider} from '../model/ProvisionProvider';
import {AccountService} from '../service/account/account.service';
import {OrderLoverService} from '../service/Order/order-lover.service';
import {ProviderService} from '../service/provider/provider.service';
import {ProvisionProviderService} from '../service/provisionprovider/provisionprovider.service';

@Component({
    selector: 'app-homegirl',
    templateUrl: './homegirl.component.html',
    styleUrls: ['./homegirl.component.css']
})
export class HomegirlComponent implements OnInit {
    providers: Provider[] = [];
    provider = new Provider;
    provisionproviders: ProvisionProvider[] = [];
    page: number = 1;
    total: number = 0;

    account!: Account;
    statusProvider!: number;


    constructor(private accountService: AccountService, private router: Router, private providerService: ProviderService,
                private provisionproviderService: ProvisionProviderService, private orderLoverService: OrderLoverService) {
    }

    ngOnInit(): void {
        this.accountService.findById(this.accountService.getAccountToken().id).subscribe(res => {
            this.account = res;
            this.providerService.findProviderByAccount_Id(this.accountService.getAccountToken().id).subscribe(res => {
                if (res != null) {
                    this.statusProvider = res.statusProvider;
                }
            })
            this.showCart(this.account.id, 1);
            this.providerService.getBoyProviderTopView().subscribe(data => {
                console.log(data)
                this.providers = data;
                this.provisionproviderService.getAllProvisionProvider().subscribe(data => {
                    this.provisionproviders = data;
                })
            });
            this.getTopSellProviderAcc();
        })
    }
    goToProviderSetting() {
        this.router.navigate(["/profileProvider"])
    }

    findProviderById(id: number) {
        this.providerService.findProviderById(id).subscribe(data => {
            console.log(data)
            this.provider = data;
        })
    }

    increaseViewProviderById(id: number) {
        this.providerService.increaseViewProviderById(id).subscribe(data => {
            this.provider = data;
            this.ngOnInit();
        })
    }

    accounts1: Account[] = [];
    providers1: Provider[] = [];
    provisionproviders1: ProvisionProvider[] = [];
    provider1!: CreateProvider;

    getTopSellProviderAcc() {
        this.providerService.getProviderTopSell().subscribe(data => {
            this.providers1 = data;
            for (let i = 0; i < this.providers1.length; i++) {
                if(this.providers1[i].account.id==this.account.id){
                    this.providers1.splice(i,1);
                }
            }
            this.total = this.providers1.length;
            this.provisionproviderService.getAllProvisionProvider().subscribe(data => {
                this.provisionproviders1 = data;
            })
        })
    }

    pageChangeEvent(event: number) {
        this.page = event;
        this.getTopSellProviderAcc();
    }

    logout() {
        localStorage.clear();
        this.router.navigate([''])
    }

    goToProvider(id: number) {
        this.router.navigate(['/bill/' + id])
        this.increaseViewProviderById(id);
    }

    goToProfile() {
        this.router.navigate(['/showProfile'])
    }

    goToEditProfile() {
        this.router.navigate(['/changeInfo'])
    }

    goToMyOrder() {
        this.router.navigate(["/userShowBill"])
    }

    goToMyBill() {
        this.router.navigate(["/providerShowBill"])
    }

    orderLovers: OrderLover[] = [];

    showCart(id: number, statusOrder: number) {
        this.orderLoverService.getAllBillOfAccountByIdAndStartOrder(id, statusOrder).subscribe(data => {
            this.orderLovers = data;
        })
    }

    createProvider() {
        // @ts-ignore
        const providerCreate = new CreateProvider("", 0, 0, 3, this.account)
        this.providerService.createProvider(providerCreate).subscribe(res => {
            Swal.fire('Done!', 'Sended!', 'success');
            this.providerService.findProviderByAccount_Id(this.accountService.getAccountToken().id).subscribe(res => {
                if (res != null) {
                    this.statusProvider = res.statusProvider;
                }
            })
        })

    }

    stringSearch: any;
    formSearch: FormGroup = new FormGroup({
        search: new FormControl()
    });
    providersSearch: Provider[] = [];

    searchProvider() {
        this.stringSearch = this.formSearch.controls["search"].value
        console.log(this.stringSearch)
        if (this.stringSearch != "") {
            this.accountService.searchProvider(this.stringSearch).subscribe((data) => {
                this.providersSearch = data;
            })
        } else {
            this.ngOnInit();
        }
    }

}

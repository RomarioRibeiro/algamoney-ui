import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';

import { InputTextModule } from 'primeng/inputtext';
import { TabViewModule } from 'primeng/tabview';
import { ButtonModule } from 'primeng/button';
import { TableModule } from 'primeng/table';
import {TooltipModule} from 'primeng/tooltip';
import {SidebarModule} from 'primeng/sidebar';
import {InputTextareaModule} from 'primeng/inputtextarea';
import { SelectButton, SelectButtonModule } from 'primeng/selectbutton';
import {CalendarModule} from 'primeng/calendar';
import {DropdownModule} from 'primeng/dropdown';
import {InputNumberModule} from 'primeng/inputnumber';
import {InputMaskModule} from 'primeng/inputmask';
import {MessageModule} from 'primeng/message';

import { AppComponent } from './app.component';


import { LancamentoPesquisaComponent } from './lancamento-pesquisa/lancamento-pesquisa.component';
import { NavbarComponent } from './navbar/navbar.component';
import { PessoaPesquisarComponent } from './pessoa-pesquisar/pessoa-pesquisar.component';
import { LancamentoCadastroComponent } from './lancamento-cadastro/lancamento-cadastro.component';
import { PessoaCadastroComponent } from './pessoa-cadastro/pessoa-cadastro.component';
import { MessageComponent } from './message/message.component';
import { LancamentoGridComponent } from './lancamento-grid/lancamento-grid.component';
import { PessoaGridComponent } from './pessoa-grid/pessoa-grid.component';

@NgModule({
  declarations: [
    AppComponent,
    LancamentoPesquisaComponent,
    NavbarComponent,
    PessoaPesquisarComponent,
    LancamentoCadastroComponent,
    PessoaCadastroComponent,
    MessageComponent,
    LancamentoGridComponent,
    PessoaGridComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    InputTextModule,
    ButtonModule,
    TabViewModule,
    TableModule,
    TooltipModule,
    SidebarModule,
    InputTextareaModule,
    SelectButtonModule,
    CalendarModule,
    DropdownModule,
    InputNumberModule,
    InputMaskModule,
    FormsModule,
    MessageModule


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

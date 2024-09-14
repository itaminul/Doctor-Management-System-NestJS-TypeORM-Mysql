import { DataSource, DataSourceOptions } from 'typeorm';
import { Usertable } from './entitys/usertable';
import { Test } from './entitys/test';
import { PatPatientsInformation } from './entitys/pat_patients_information';
import { Patientsrx } from './entitys/patientsrx';
import { Rxmedicine } from './entitys/rxmedicine';
import { Rxexaminations } from './entitys/rxexaminations';
import { RxInvestigations } from './entitys/rxinvestigations';
import { RxAdvice } from './entitys/rxadvice';
import { Rxcomplains } from './entitys/rxcomplains';
import { Medicine } from './entitys/medicine';
import { Complains } from './entitys/complains';
import { Set_investigations } from './entitys/set_investigations';
import { SetAdvice } from './entitys/setAdvice';

export const AppDataSource:DataSourceOptions = {
  type: 'mysql',
  host: '192.168.0.106',
port: 3306,
  username: 'qms_uat',         // Update with your MySQL username
  password: 'qms_uat',     // Update with your MySQL password
  database: 'qms_uat',  // Update with your MySQL database name
  entities: [Usertable, PatPatientsInformation, Patientsrx, Rxmedicine, Rxexaminations, RxInvestigations, RxAdvice, Rxcomplains, Medicine, Complains, Set_investigations, SetAdvice], 
  synchronize: false,        // Set to false in production
  logging: true,
};



  const dataSource = new DataSource(AppDataSource);
  export default dataSource;

  // "migration:generate": "npm run build && npm run typeorm -- migration:generate -d ./dist/data-source.js src/migrations/AutoGeneratedMigration",
// npm run typeorm -- migration:generate -d ./dist/data-source.js ./src/migrations/CreateEmployeeAndDepartmentTables
// npm run typeorm -- migration:generate -d ./dist/data-source.js ./src/migrations/CreateEmployeeAndDepartmentTables
// npm run typeorm -- migration:run -d ./data-source.ts
// npm run migration:generate
// npm run migration:run

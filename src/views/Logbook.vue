<template>
  <div id="logbook">
   <h1>Log Book</h1>
   <div class="container-fluid">
     <div class="row">
     <div class="col-md-2"> <Menu/></div>
   <div class="col-md-10">
            <form @submit.prevent="onFormSubmit">
                <div class="row">
                    <p>Samaki catch/Effort:Data collection form</p><p class="spacing">Sample id.no(when inputting):</p><b-form-select class="form-control" placeholder="WEP" v-model="user.wep" :options="weps" required style="width:11em;margin-left:3px"></b-form-select>
                </div>
                <div class="row" style="margin-top:20px">
                     <p> Site:</p> <b-form-select class="form-control" v-model="user.site" :options="sites" required style="width:11em;margin-left:3px"></b-form-select>
                     <p style="margin-left:80px;">Date:</p><b-form-datepicker
                        id="datepicker-buttons" v-model="user.date" placeholder="Choose a date" required
                        :date-format-options="{ year: 'numeric', month: 'numeric', day: 'numeric' }"
                        today-button
                        close-button
                        locale="en"
                        style="width:15em;margin-left:3px"
                        ></b-form-datepicker>
                    <p style="margin-left:80px"> Data Collector:</p> <b-form-select class="form-control" v-model="user.collector" :options="collectors" required style="width:11em;margin-left:3px"></b-form-select>
                </div>
                <div class="row" style="margin-top:20px">
                    <p>Boat types and principal gears</p><b-form-select class="form-control" v-model="user.boat" :options="boats" required style="width:31em;margin-left:3px"></b-form-select>
                </div>
                <b-table-simple hover small caption-top responsive style="margin-top:20px">
                <colgroup><col><col></colgroup>
                <colgroup><col><col><col></colgroup>
                <colgroup><col><col></colgroup>
                <b-thead head-variant="light">
                <b-tr>
                    <b-th>MT</b-th>
                    <b-th>LONGLINE</b-th>
                    <b-th>RINGNET</b-th>
                    <b-th>GILLNET</b-th>
                    <b-th>TRAPS</b-th>
                    <b-th>SPEAR</b-th>
                    <b-th>H&L</b-th>
                    <b-th>PURSE SEINE</b-th>
                </b-tr>
                </b-thead>
                <b-tbody>
                <b-tr>
                    <b-th class="text-right">1</b-th>
                    <b-td><input type="text" class="form-data" v-model="user.longline" required style="width:7em"></b-td>
                    <b-td><input type="text" class="form-data" v-model="user.ringnet" required style="width:7em"></b-td>
                    <b-td><input type="text" class="form-data" v-model="user.gillnet" required style="width:7em"></b-td>
                    <b-td><input type="text" class="form-data" v-model="user.traps" required style="width:7em"></b-td>
                    <b-td><input type="text" class="form-data" v-model="user.spear" required style="width:7em"></b-td>
                    <b-td><input type="text" class="form-data" v-model="user.hl" required style="width:7em"></b-td>
                    <b-td><input type="text" class="form-data" v-model="user.purse" required style="width:7em"></b-td>
                </b-tr>
                <b-tr>
                    <b-th class="text-right">2</b-th>
                    <b-td><input type="text" class="form-data" v-model="user.longline2" style="width:7em"></b-td>
                    <b-td><input type="text" class="form-data" v-model="user.ringnet2" style="width:7em"></b-td>
                    <b-td><input type="text" class="form-data" v-model="user.gillnet2" style="width:7em"></b-td>
                    <b-td><input type="text" class="form-data" v-model="user.traps2" style="width:7em"></b-td>
                    <b-td><input type="text" class="form-data" v-model="user.spear2" style="width:7em"></b-td>
                    <b-td><input type="text" class="form-data" v-model="user.hl2" style="width:7em"></b-td>
                    <b-td><input type="text" class="form-data" v-model="user.purse2" style="width:7em"></b-td>
                </b-tr>
                <b-tr>
                    <b-th class="text-right">3</b-th>
                    <b-td><input type="text" class="form-data" v-model="user.longline3" style="width:7em"></b-td>
                    <b-td><input type="text" class="form-data" v-model="user.ringnet3" style="width:7em"></b-td>
                    <b-td><input type="text" class="form-data" v-model="user.gillnet3" style="width:7em"></b-td>
                    <b-td><input type="text" class="form-data" v-model="user.traps3" style="width:7em"></b-td>
                    <b-td><input type="text" class="form-data" v-model="user.spear3" style="width:7em"></b-td>
                    <b-td><input type="text" class="form-data" v-model="user.hl3" style="width:7em"></b-td>
                    <b-td><input type="text" class="form-data" v-model="user.purse3" style="width:7em"></b-td>
                </b-tr>
                </b-tbody>
                <b-tfoot>
                <b-tr>
                    <b-td colspan="7" variant="secondary" class="text-right">
                    <b-icon icon="arrow-up" font-scale="1.5"></b-icon> Days worked previous week WITH SPECIFIED GEAR (0-7)
                    </b-td>
                </b-tr>
                </b-tfoot>
            </b-table-simple>
                <b-table-simple hover small caption-top responsive style="margin-top:20px">
                <caption>Catch by species.Please specify ONLY one of (3),(4).     Please specify Only one of (5),(6),(7).</caption>
                <colgroup><col><col></colgroup>
                <colgroup><col><col><col></colgroup>
                <colgroup><col><col></colgroup>
                <b-thead head-variant="light">
                <b-tr>
                    <b-th>S/N</b-th>
                    <b-th>SPECIES<br>{1}</b-th>
                    <b-th>KG<br>{2}</b-th>
                    <b-th>PRICE<br>{3}</b-th>
                    <b-th>VALUE<br>{4}</b-th>
                    <b-th>AVERAGE<br>{5}</b-th>
                    <b-th>N/KG<br>{6}</b-th>
                    <b-th>NO/CATCH<br>{7}</b-th>
                </b-tr>
                </b-thead>
                <b-tbody>
                <b-tr>
                    <b-th>1</b-th>
                    <b-th class="text-right"><b-form-select class="form-control" v-model="user.spiece" :options="spieces" required style="width:11em;margin-left:3px"></b-form-select></b-th>
                    <b-td><input type="text" class="form-data" v-model="user.kg" required style="width:7em"></b-td>
                    <b-td><input type="text" class="form-data" v-model="user.price" required style="width:7em"></b-td>
                    <b-td><input type="text" class="form-data" v-model="user.value" required style="width:7em"></b-td>
                    <b-td><input type="text" class="form-data" v-model="user.average" required style="width:7em"></b-td>
                    <b-td><input type="text" class="form-data" v-model="user.nkg" required style="width:7em"></b-td>
                    <b-td><input type="text" class="form-data" v-model="user.catch" required style="width:7em"></b-td>
                </b-tr>
                <b-tr>
                    <b-th>2</b-th>
                    <b-th class="text-right"> <b-form-select class="form-control" v-model="user.spiece2" :options="spieces2" style="width:11em;margin-left:3px"></b-form-select></b-th>
                    <b-td><input type="text" class="form-data" v-model="user.kg2" style="width:7em"></b-td>
                    <b-td><input type="text" class="form-data" v-model="user.price2" style="width:7em"></b-td>
                    <b-td><input type="text" class="form-data" v-model="user.value2" style="width:7em"></b-td>
                    <b-td><input type="text" class="form-data" v-model="user.average2" style="width:7em"></b-td>
                    <b-td><input type="text" class="form-data" v-model="user.nkg2" style="width:7em"></b-td>
                    <b-td><input type="text" class="form-data" v-model="user.catch2" style="width:7em"></b-td>
                </b-tr>
                <b-tr>
                    <b-th>3</b-th>
                    <b-th class="text-right"><b-form-select class="form-control" v-model="user.spiece3" :options="spieces3" style="width:11em;margin-left:3px"></b-form-select></b-th>
                    <b-td><input type="text" class="form-data" v-model="user.kg3" style="width:7em"></b-td>
                    <b-td><input type="text" class="form-data" v-model="user.price3" style="width:7em"></b-td>
                    <b-td><input type="text" class="form-data" v-model="user.value3" style="width:7em"></b-td>
                    <b-td><input type="text" class="form-data" v-model="user.average3" style="width:7em"></b-td>
                    <b-td><input type="text" class="form-data" v-model="user.nkg3" style="width:7em"></b-td>
                    <b-td><input type="text" class="form-data" v-model="user.catch3" style="width:7em"></b-td>
                </b-tr>
                <b-tr>
                    <b-th>4</b-th>
                    <b-th class="text-right"><b-form-select class="form-control" v-model="user.spiece4" :options="spieces4" style="width:11em;margin-left:3px"></b-form-select></b-th>
                    <b-td><input type="text" class="form-data" v-model="user.kg4" style="width:7em"></b-td>
                    <b-td><input type="text" class="form-data" v-model="user.price4" style="width:7em"></b-td>
                    <b-td><input type="text" class="form-data" v-model="user.value4" style="width:7em"></b-td>
                    <b-td><input type="text" class="form-data" v-model="user.average4" style="width:7em"></b-td>
                    <b-td><input type="text" class="form-data" v-model="user.nkg4" style="width:7em"></b-td>
                    <b-td><input type="text" class="form-data" v-model="user.catch4" style="width:7em"></b-td>
                </b-tr>
                <b-tr>
                    <b-th>5</b-th>
                    <b-th class="text-right"><b-form-select class="form-control" v-model="user.spiece5" :options="spieces5" style="width:11em;margin-left:3px"></b-form-select></b-th>
                    <b-td><input type="text" class="form-data" v-model="user.kg5" style="width:7em"></b-td>
                    <b-td><input type="text" class="form-data" v-model="user.price5" style="width:7em"></b-td>
                    <b-td><input type="text" class="form-data" v-model="user.value5" style="width:7em"></b-td>
                    <b-td><input type="text" class="form-data" v-model="user.average5" style="width:7em"></b-td>
                    <b-td><input type="text" class="form-data" v-model="user.nkg5" style="width:7em"></b-td>
                    <b-td><input type="text" class="form-data" v-model="user.catch6" style="width:7em"></b-td>
                </b-tr>
                <b-tr>
                    <b-th>6</b-th>
                    <b-th class="text-right"><b-form-select class="form-control" v-model="user.spiece6" :options="spieces6" style="width:11em;margin-left:3px"></b-form-select></b-th>
                    <b-td><input type="text" class="form-data" v-model="user.kg6" style="width:7em"></b-td>
                    <b-td><input type="text" class="form-data" v-model="user.price6" style="width:7em"></b-td>
                    <b-td><input type="text" class="form-data" v-model="user.value6" style="width:7em"></b-td>
                    <b-td><input type="text" class="form-data" v-model="user.average6" style="width:7em"></b-td>
                    <b-td><input type="text" class="form-data" v-model="user.nkg6" style="width:7em"></b-td>
                    <b-td><input type="text" class="form-data" v-model="user.catch6" style="width:7em"></b-td>
                </b-tr>
                <b-tr>
                    <b-th>7</b-th>
                    <b-th class="text-right"><b-form-select class="form-control" v-model="user.spiece7" :options="spieces7" style="width:11em;margin-left:3px"></b-form-select></b-th>
                    <b-td><input type="text" class="form-data" v-model="user.kg7" style="width:7em"></b-td>
                    <b-td><input type="text" class="form-data" v-model="user.price7" style="width:7em"></b-td>
                    <b-td><input type="text" class="form-data" v-model="user.value7" style="width:7em"></b-td>
                    <b-td><input type="text" class="form-data" v-model="user.average7" style="width:7em"></b-td>
                    <b-td><input type="text" class="form-data" v-model="user.nkg7" style="width:7em"></b-td>
                    <b-td><input type="text" class="form-data" v-model="user.catch7" style="width:7em"></b-td>
                </b-tr>
                <b-tr>
                    <b-th>8</b-th>
                    <b-th class="text-right"><b-form-select class="form-control" v-model="user.spiece8" :options="spieces8" style="width:11em;margin-left:3px"></b-form-select></b-th>
                    <b-td><input type="text" class="form-data" v-model="user.kg8" style="width:7em"></b-td>
                    <b-td><input type="text" class="form-data" v-model="user.price8" style="width:7em"></b-td>
                    <b-td><input type="text" class="form-data" v-model="user.value8" style="width:7em"></b-td>
                    <b-td><input type="text" class="form-data" v-model="user.average8" style="width:7em"></b-td>
                    <b-td><input type="text" class="form-data" v-model="user.nkg8" style="width:7em"></b-td>
                    <b-td><input type="text" class="form-data" v-model="user.catch8" style="width:7em"></b-td>
                </b-tr>
                </b-tbody>
            </b-table-simple>
    
                <!-- <div class="form-group">
                    <label>Name</label>
                    <input type="text" class="form-control" v-model="user.name" required>
                </div>

                <div class="form-group">
                    <label>Email</label>
                    <input type="email" class="form-control" v-model="user.email" required>
                </div>

                <div class="form-group">
                    <label>Phone</label>
                    <input type="text" class="form-control" v-model="user.phone" required>
                </div> -->

                <div class="form-group">
                    <button class="btn btn-primary btn-block">Submit</button>
                </div>
            </form>
   </div>
   </div>
  </div>
  </div>
</template>

<style scoped>
.spacing{
    margin-left: 20em;
}
</style>

<script>
    import { db } from '@/main';
    import Menu from "@/components/Menu.vue";

    export default {
      name: "Logbook",
      components: {
        Menu,
        
      },
    
        data() {
            return {
                user: {
                },
                value: '',
                context: null,
                site: 'Ferry',
                sites: [
                { value: 'Ferry', text: 'Ferry' },
                { value: 'Saadani', text: 'Saadani' },
                { value: 'Mwanza', text: 'Mwanza' },
                { value: 'Kigoma', text: 'Kigoma' }
                ],
                collector: 'Ferry',
                collectors: [
                { value: 'Jackie', text: 'Jackie' },
                { value: 'John', text: 'John' },
                { value: 'Katumbo', text: 'Katumbo' },
                { value: 'Chidy', text: 'Chidy' }
                ],
                boat: 'Ferry',
                boats: [
                { value: 'Bass Boat', text: 'Bass Boat' },
                { value: 'Bay Boat', text: 'Bay Boat' },
                { value: 'Cabin Cruisers', text: 'Cabin Cruisers' },
                { value: 'Cuddy Cabins', text: 'Cuddy Cabins' }
                ],
                wep: 'Ferry',
                weps: [
                { value: '1', text: '1' },
                { value: '2', text: '2' },
                { value: '3', text: '3' },
                { value: '4', text: '4' },
                { value: '5', text: '5' },
                { value: '6', text: '6' },
                { value: '7', text: '7' },
                { value: '8', text: '8' },
                ],
                spiece: 'Ferry',
                spieces: [
                { value: 'Sato/Tilapia', text: 'Sato/Tilapia' },
                { value: 'Kibua/Horse Marckerel', text: 'Kibua/Horse Marckerel' },
                { value: 'Sangara/perch', text: 'Sangara/perch' },
                { value: 'Mgebuka/rebel', text: 'Mgebuka/rebel' }
                ],
                spiece2: 'Ferry',
                spieces2: [
                { value: 'Sato/Tilapia', text: 'Sato/Tilapia' },
                { value: 'Kibua/Horse Marckerel', text: 'Kibua/Horse Marckerel' },
                { value: 'Sangara/perch', text: 'Sangara/perch' },
                { value: 'Mgebuka/rebel', text: 'Mgebuka/rebel' }
                ],
                spiece3: 'Ferry',
                spieces3: [
                { value: 'Sato/Tilapia', text: 'Sato/Tilapia' },
                { value: 'Kibua/Horse Marckerel', text: 'Kibua/Horse Marckerel' },
                { value: 'Sangara/perch', text: 'Sangara/perch' },
                { value: 'Mgebuka/rebel', text: 'Mgebuka/rebel' }
                ],
                spiece4: 'Ferry',
                spieces4: [
                { value: 'Sato/Tilapia', text: 'Sato/Tilapia' },
                { value: 'Kibua/Horse Marckerel', text: 'Kibua/Horse Marckerel' },
                { value: 'Sangara/perch', text: 'Sangara/perch' },
                { value: 'Mgebuka/rebel', text: 'Mgebuka/rebel' }
                ],
                spiece5: 'Ferry',
                spieces5: [
                { value: 'Sato/Tilapia', text: 'Sato/Tilapia' },
                { value: 'Kibua/Horse Marckerel', text: 'Kibua/Horse Marckerel' },
                { value: 'Sangara/perch', text: 'Sangara/perch' },
                { value: 'Mgebuka/rebel', text: 'Mgebuka/rebel' }
                ],
                spiece6: 'Ferry',
                spieces6: [
                { value: 'Sato/Tilapia', text: 'Sato/Tilapia' },
                { value: 'Kibua/Horse Marckerel', text: 'Kibua/Horse Marckerel' },
                { value: 'Sangara/perch', text: 'Sangara/perch' },
                { value: 'Mgebuka/rebel', text: 'Mgebuka/rebel' }
                ],
                spiece7: 'Ferry',
                spieces7: [
                { value: 'Sato/Tilapia', text: 'Sato/Tilapia' },
                { value: 'Kibua/Horse Marckerel', text: 'Kibua/Horse Marckerel' },
                { value: 'Sangara/perch', text: 'Sangara/perch' },
                { value: 'Mgebuka/rebel', text: 'Mgebuka/rebel' }
                ],
                spiece8: 'Ferry',
                spieces8: [
                { value: 'Sato/Tilapia', text: 'Sato/Tilapia' },
                { value: 'Kibua/Horse Marckerel', text: 'Kibua/Horse Marckerel' },
                { value: 'Sangara/perch', text: 'Sangara/perch' },
                { value: 'Mgebuka/rebel', text: 'Mgebuka/rebel' }
                ],
            }
        },
        methods: {
            onFormSubmit(event) {
                event.preventDefault()
                db.collection('Data').add(this.user).then(() => {
                    alert("Data successfully submitted!");
                    this.user.email = ''
                    this.user.name = ''
                    this.user.phone = ''
                    this.user.site = ''
                    this.user.wep = ''
                    this.user.boat = ''
                    this.user.date = ''
                    this.user.collector = ''
                    this.user.longline = ''
                    this.user.ringnet = ''
                    this.user.gillnet = ''
                    this.user.traps = ''
                    this.user.spear = ''
                    this.user.hl = ''
                    this.user.purse = ''
                    this.user.longline2 = ''
                    this.user.ringnet2 = ''
                    this.user.gillnet2 = ''
                    this.user.traps2 = ''
                    this.user.spear2 = ''
                    this.user.hl2 = ''
                    this.user.purse2 = ''
                    this.user.longline3 = ''
                    this.user.ringnet3 = ''
                    this.user.gillnet3 = ''
                    this.user.traps3 = ''
                    this.user.spear3 = ''
                    this.user.hl3 = ''
                    this.user.purse3 = ''
                    this.user.spiece = ''
                    this.user.spiece2 = ''
                    this.user.spiece3 = ''
                    this.user.spiece4 = ''
                    this.user.spiece5 = ''
                    this.user.spiece6 = ''
                    this.user.spiece7 = ''
                    this.user.spiece8 = ''
                    this.user.kg = ''
                    this.user.price = ''
                    this.user.value = ''
                    this.user.average = ''
                    this.user.nkg = ''
                    this.user.catch = ''
                    this.user.kg2 = ''
                    this.user.price2 = ''
                    this.user.value2 = ''
                    this.user.average2 = ''
                    this.user.nkg2 = ''
                    this.user.catch2 = ''
                    this.user.kg3 = ''
                    this.user.price3 = ''
                    this.user.value3 = ''
                    this.user.average3 = ''
                    this.user.nkg3 = ''
                    this.user.catch3 = ''
                    this.user.kg4 = ''
                    this.user.price4 = ''
                    this.user.value4 = ''
                    this.user.average4 = ''
                    this.user.nkg4 = ''
                    this.user.catch4 = ''
                    this.user.kg5 = ''
                    this.user.price5 = ''
                    this.user.value5 = ''
                    this.user.average5 = ''
                    this.user.nkg5 = ''
                    this.user.catch5 = ''
                    this.user.kg6 = ''
                    this.user.price6 = ''
                    this.user.value6 = ''
                    this.user.average6 = ''
                    this.user.nkg6 = ''
                    this.user.catch6 = ''
                    this.user.kg7 = ''
                    this.user.price7 = ''
                    this.user.value7 = ''
                    this.user.average7 = ''
                    this.user.nkg7 = ''
                    this.user.catch7 = ''
                    this.user.kg8 = ''
                    this.user.price8 = ''
                    this.user.value8 = ''
                    this.user.average8 = ''
                    this.user.nkg8 = ''
                    this.user.catch8 = ''
                    
                    
                }).catch((error) => {
                    console.log(error);
                });
            },
            onContext(ctx) {
        this.context = ctx
        }
        }
    }
</script>
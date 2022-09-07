<template>
  <div>
    <div class="box box-success" v-if="!$root.spinner">
      <div class="box-header with-border">
        <div class="row">
          <form v-on:submit.prevent="search" class="form-row col-12 no-padding pl-1">
            <div class="col-2 pl-3 no-padding">
                <select
                    v-model="search_data.month"
                    class="form-control form-control-sm"
                >
                    <option value="">Select Month</option>
                    <option
                        v-for="(month, i) in $root.variable.month"
                        :key="i"
                        :value="month.month"
                    >{{ month.month_name }}</option>
                </select>
            </div>

              <div class="col-2 pl-3 no-padding">
                  <select
                      v-model="search_data.year"
                      class="form-control form-control-sm"
                  >
                      <option value="">Select Year</option>
                      <option
                          v-for="(year, i) in $root.variable.years"
                          :key="i"
                          :value="year"
                      >{{ year }}</option>
                  </select>
              </div>

              <div class="col-2 pl-3 no-padding">
                  <select
                      v-model="search_data.admin_id"
                      class="form-control form-control-sm"
                  >
                      <option value="0">Select Team Members</option>
                      <option
                          v-for="(user, i) in $root.variable.team_members"
                          :key="i"
                          :value="user.id"
                      >{{ user.name }}</option>
                  </select>
              </div>

            <Search :fields_name="fields_name" />
          </form>
        </div>
        <div class="row">
          <div class="col-md-12 text-right">
            <a
              href="javascript:void(0)"
              class="btn btn-info btn-xs text-white"
              @click="print('printArea')"
            >
              <i class="fa fa-print"></i> Print
            </a>
          </div>
        </div>
      </div>

      <!--============ Data List Start ============-->
      <div class="box-body box-min-height" id="printArea">
        <div class="row">
          <div class="col-md-12">
            <h3 class="text-center">
              Monthly Login Histories (
              <slot>{{ today | formatDate }}</slot>)
            </h3>
          </div>
        </div>

        <div class="table-responsive">
            <table class="table table-hover table-bordered" border="1">
                <thead class="bg-primary">
                <tr>
                    <th rowspan="2">Employee Name</th>
                    <slot v-for="(day, index) in day_list">
                        <th width="100px" colspan="2" style="text-align: center;" :class="day.day == 'Fri'? 'text-danger '+ (day.today? 'bg-dark' : '') : ((day.day == 'Sat')? 'text-success '+ (day.today? 'bg-dark' : '') : 'text-white '+ (day.today? 'bg-dark' : ''))" :key="index">
                            {{ day.day_number }}<br/>
                            {{ day.day }}
                        </th>
                    </slot>
                </tr>

                <tr>
                    <slot v-for="(day, index) in day_list">
                        <th :class="day.day == 'Fri'? 'text-danger '+ (day.today? 'bg-dark' : '') : ((day.day == 'Sat')? 'text-success '+(day.today? 'bg-dark' : '') : 'text-white '+ (day.today? 'bg-dark' : ''))">In</th>
                        <th :class="day.day == 'Fri'? 'text-danger '+ (day.today? 'bg-dark' : '') : ((day.day == 'Sat')? 'text-success '+(day.today? 'bg-dark' : '') : 'text-white '+ (day.today? 'bg-dark' : ''))">Out</th>
                    </slot>
                </tr>
                </thead>
                <tbody>
                <slot v-if="data.length > 0">
                    <tr v-for="(user, index) in data" :key="index">
                        <td>{{ user.name }}</td>
                        <slot v-for="(working_day, index) in user.working_history">
                            <slot v-if="working_day.day != 'Fri'">
                            <td :key="Math.random()" :class="(working_day.day == 'Sat')? 'text-success text-center' : 'text-center'">
                                <p :class="working_day.today && working_day.login_history && working_day.login_history.login_time? 'today' : ''">
                                    {{ (working_day.login_history)?working_day.login_history.login_time : '' }}
                                </p>
                            </td>
                            <td :class="(working_day.day == 'Sat')? 'text-success text-center' : 'text-center'">
                                <p :class="working_day.today && working_day.login_history && working_day.login_history.logout_time? 'today' : ''">
                                    {{ (working_day.login_history)?working_day.login_history.logout_time : '' }}
                                </p>
                            </td>
                            </slot>
                            <td v-if="working_day.day == 'Fri'" colspan="2" class="text-danger text-center">
                                <p :class="working_day.today? 'today' : ''">
                                    <b>OFF DAY</b>
                                </p>
                            </td>
                        </slot>
                    </tr>
                </slot>
                <slot v-else>
                    <tr>
                        <th :colspan="day_list.length + 1" style="text-align: center;">No Data Found</th>
                    </tr>
                </slot>
                </tbody>
            </table>
        </div>
      </div>
      <!--============ Data List End ============-->
    </div>
  </div>
</template>

<script>
// define model name
import moment from 'moment'

const today = moment.utc();

const model = "monthlyloginhistories";

export default {
  data() {
    return {
      model: model,
      today: today,
      fields_name: { 0: "Select One", title: "Issue" },
      search_data: {
          admin_id: '0',
          month: '',
          year: '',
        field_name: 0,
        value: ""
      },
      total_hour: 0,
      data: [],
      day_list:[],
      issue: {}
    };
  },
  methods: {
    get_monthlyloginhistories(params = null) {
      this.$root.spinner = true;
      axios
        .get("/" + this.model, { params: params })
        .then(res => {
          this.data     = res.data.users;
          this.day_list = res.data.day_list;
        })
        .then(() => this.$root.spinner = false);
    },
    search() {
      this.get_monthlyloginhistories(this.search_data);
    }
  },
  created() {
    this.get_monthlyloginhistories(this.search_data);
  }
};
</script>

<style scoped>
    .today{
        padding: 10px;
        border-radius: 4px;
        background-color: black;
        color: white;
        text-align: center;
        box-shadow: 3px 3px 3px;
        width: 100%;
        height: 100%;
    }
</style>

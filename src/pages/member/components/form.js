import address from 'js/address.json'
import Address from 'js/addressService.js'
import { mapState } from 'vuex'

export default {
    data() {
        return {
            name: '',
            tel: '',
            provinceValue: -1,
            cityValue: -1,
            districtValue: -1,
            address: '',
            id: '',
            //isDefault: false,
            instance: '',
            //type: this.$route.query.type,
            addressData: require('js/address.json'),
            cityList: null,
            districtList: null,
            //instance: this.$route.query.instance,
            //isInitVal: false
            // instance: JSON.parse(sessionStorage.getItem('instance'))
        }
    },
    //第 1 种写法
    //computed: {
    //    lists() {
    //        return this.$store.state.lists
    //    }
    //},
    //第 2 种写法
    //computed: mapState['lists'],
    //第 3 种写法
    computed: {
        ...mapState({
            lists: state => state.lists
        })
    },
    created() {
        let query = this.$route.query
        this.type = query.type
        this.instance = query.instance

        if(this.type === 'edit') {
            // 注释: ad = address
            let ad = this.instance
            this.provinceValue = parseInt(ad.provinceValue)
            //this.isInitVal = true
            this.name = ad.name
            this.tel = ad.tel
            this.addres = ad.address
            this.id = ad.id
            //this.isDefault = ad.isDefault
        }
    },
    methods: {
        add() {
            //需要做非空和合法性校验
            let {name, tel, provinceValue, cityValue, districtValue, address} = this
            let data = {name, tel, provinceValue, cityValue, districtValue, address}
            if(this.type === 'add') {
                //Address.add(data).then(res => {
                //    this.$router.go(-1)
                //})
                this.$store.dispatch('addAction', data)
            }
            if(this.type === 'edit') {
                data.id = this.id
                //Address.update(data).then(res => {
                //    this.$router.go(-1)
                //})
                this.$store.dispatch('updateAction', data)
            }
        },
        remove() {
            if(window.confirm(' 确认删除吗？ ')) {
                //Address.remove(this.id).then(res => {
                //    this.$router.go(-1)
                //})
                //console.log(this.id)
                this.$store.dispatch('removeAction', this.id)
            }
        },
        setDefault() {
            //Address.setDefault(this.id).then(res => {
            //    this.$router.go(-1)
            //})
            this.$store.dispatch('setDefaultAction', this.id)   
        }
    },
    watch: {
        lists: {
            handler() {
                this.$router.go(-1)
            },
            deep: true
        },
        provinceValue(val) {
            if(val === -1) return
            let list = this.addressData.list
            let index = list.findIndex(item => {
                return item.value === val
            })
            this.cityList = list[index].children
            this.cityValue = -1
            this.districtValue = -1

            if(this.type === 'edit' && this.isInitVal) {
                this.cityValue = parseInt(this.instance.cityValue)
            }
        },
        cityValue(val) {
            if(val === -1) return
            let list = this.cityList
            let index = list.findIndex(item => {
                return item.value === val
            })
            this.districtList = list[index].children
            this.districtValue = -1
            if(this.type === 'edit' && this.isInitVal) {
                this.districtValue = parseInt(this.instance.districtValue)
                this.isInitVal = false
            }
        }
    }
}
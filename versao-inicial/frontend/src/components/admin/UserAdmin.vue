<template>
    <div class="user-admin">
        <b-form>
            <input type="hidden" id="user-id" v-model="user.ud" />
            <b-row>
                <b-col md="6" sm="12">
                    <b-form-group label="Nome:" label-for="user-name">
                        <b-form-input id="user-name" type="text"
                            v-model="usr.name" required 
                            placeholder="Informe o nome do usuário..."/>
                    </b-form-group>
                </b-col>
                <b-col md="6" sm="12">
                    <b-form-group label="E-mail:" label-for="user-email">
                        <b-form-input id="user-email" type="text"
                            v-model="usr.email" required 
                            placeholder="Informe o E-mail do usuário..."/>
                    </b-form-group>
                </b-col>
            </b-row>
            <b-form-checkbox id="user-admin" v-model="user.admin"/>
            <b-row>
                <b-col md="6" sm="12">
                    <b-form-group label="Senha:" label-for="user-password">
                        <b-form-input id="user-password" type="password"
                            v-model="usr.password" required 
                            placeholder="Informe a senha do usuário..."/>
                    </b-form-group>
                </b-col>
                <b-col md="6" sm="12">
                    <b-form-group label="Confirmação de senha:" label-for="user-confirm-password">
                        <b-form-input id="user-confirm-password" type="password"
                            v-model="usr.confirmPassword" required 
                            placeholder="Confirme a senha do usuário..."/>
                    </b-form-group>
                </b-col>
            </b-row>
        </b-form>
        <b-table hover striped :items="users" :fields="fields"></b-table>
    </div>
</template>

<script>
import {baseApiUrl} from '@/global'

export default {
    name: 'UserAdmin',
    data: function() {
        return {
            mode: 'save',
            user: {},
            users: [],
            fields: [
                {key: 'id', label: 'Código', sortable: true},
                {key: 'name', label: 'Nome', sortable: true},
                {key: 'email', label: 'E-mail', sortable: true},
                {key: 'admin', label: 'Adminstrador', sortable: true,
                    formatter: value => value ? 'Sim' : 'Não'},
                {key: 'action', label: 'Ações'}
            ]
        }
    },
    methods: {
        loadUsers() {
            const url = `${baseApiUrl}/users`
            axios.get(url).then(res => {
                this.users = res.data
            })
        }
    },
    mounted() {

    }
}
</script>

<style>

</style>
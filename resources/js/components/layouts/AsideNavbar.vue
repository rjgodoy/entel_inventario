<template>
    <aside class="is-sidebar-menu">
        <div class="has-text-centered">
            <img style="margin-bottom: 20px;" src="/img/iconografia/entel-logo.png" alt="Bulma: a modern CSS framework based on Flexbox" width="112" height="28">
        </div>
        <nav class="menu">
            <p class="menu-label">
                General
            </p>
            <ul class="menu-list">
                <li><a>Dashboard</a></li>
                <li><a>Customers</a></li>
            </ul>
            <p class="menu-label">
                Administration
            </p>
            <ul class="menu-list">
                <li><a>Team Settings</a></li>
                <li>
                    <a class="is-active">Manage Your Team</a>
                    <ul>
                        <li><a>Members</a></li>
                        <li><a>Plugins</a></li>
                        <li><a>Add a member</a></li>
                    </ul>
                </li>
                <li><a>Invitations</a></li>
                <li><a>Cloud Storage Environment Settings</a></li>
                <li><a>Authentication</a></li>
            </ul>
            <p class="menu-label">
                Transactions
            </p>
            <ul class="menu-list">
                <li><a>Payments</a></li>
                <li><a>Transfers</a></li>
                <li><a>Balance</a></li>
            </ul>
        </nav>

    </aside>
        
</template>

<script>

    export default { 
        components: {
        },       
        props: {
            // menu: {
            //     type: Array,
            //     default: () => []
            // }
        },
        methods: {
            // menuClick (item) {
            //     console.log(item)
            // }
        }
    }
</script>

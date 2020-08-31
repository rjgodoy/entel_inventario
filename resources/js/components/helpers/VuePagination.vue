<template>
    <nav class="pagination is-centered is-small" role="navigation" aria-label="pagination">
        <ul class="pagination-list">
            
            <li v-if="pagination.current_page == 1">
                <a href="javascript:void(0)" aria-label="Previous" disabled class="pagination-previous">
                    <span aria-hidden="true" :class="primaryText">Previous</span>
                </a>
            </li>
            <li v-if="pagination.current_page > 1">
                <a href="javascript:void(0)" aria-label="Previous" v-on:click.prevent="changePage(pagination.current_page - 1)" class="pagination-previous">
                    <span aria-hidden="true" :class="primaryText">Previous</span>
                </a>
            </li>

            <li v-for="page in pagesNumber">
                <a href="javascript:void(0)" v-on:click.prevent="changePage(page)" class="pagination-link" :class="page == pagination.current_page ? 'is-current' : primaryText">{{ page }}</a>
            </li>

            <li v-if="pagination.current_page < pagination.last_page">
                <a href="javascript:void(0)" aria-label="Next" v-on:click.prevent="changePage(pagination.current_page + 1)"  class="pagination-next">
                    <span aria-hidden="true" :class="primaryText">Next Page</span>
                </a>
            </li>
            <li v-if="pagination.current_page == pagination.last_page">
                <a href="javascript:void(0)" aria-label="Next" disabled  class="pagination-next">
                    <span aria-hidden="true" :class="primaryText">Next Page</span>
                </a>
            </li>
        </ul>
    </nav>
</template>
<script>
    export default{
        props: {
            pagination: {
                type: Object,
                required: true
            },
            offset: {
                type: Number,
                default: 4
            },
            primaryText: String
        },
        computed: {
            pagesNumber() {
                if (!this.pagination.to) {
                    return [];
                }
                let from = this.pagination.current_page - this.offset;
                if (from < 1) {
                    from = 1;
                }
                let to = from + (this.offset * 2);
                if (to >= this.pagination.last_page) {
                    to = this.pagination.last_page;
                }
                let pagesArray = [];
                for (let page = from; page <= to; page++) {
                    pagesArray.push(page);
                }
                return pagesArray;
            }
        },
        methods : {
            changePage(page) {
                this.pagination.current_page = page;
                this.$emit('paginate');
            }
        }
    }
</script>
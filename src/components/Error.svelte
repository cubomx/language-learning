
<script>
    export let msg;
</script>

<style>
    .Error{
        background-color: #ffcfd1;
        margin-top: 10px;
        text-align: justify;
        border-radius: 5px;
        padding: 20px;
    }
    i {
        color: #ff606d;
    }
</style>


<div class="Error">
    <i class="fas fa-exclamation-triangle" />{"  " + msg}
</div>
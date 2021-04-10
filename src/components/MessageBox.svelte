<script>
    export let msg, description;
</script>

<style>
    .MessageBox{
        border: 1px solid rgba(219, 219, 219, 1);
        border-radius: 4px;
        background-color: white;
        margin: auto auto auto auto;
        width: 300px;
        height: fit-content;
        position: fixed;
        right: 0;
        top: 0;
        bottom: 0;
        left: 0;
        z-index: 9;
        padding: 20px 20px;
    }

    .MessageBox_Title{
        display: flex;
        justify-content: space-between;
        font-weight:900;
        font-size: 1.25rem;
    }
    
    .MessageBox_Description{
        text-align: justify;
    }
    
    .btn:hover{
        background-color: rgb(100,100,100, 0.6);
    }
    .MessageBox_AcceptBtn{
        background-color: green;
        color: white;
    }

    .MessageBox_CancelBtn{
        background-color: red;
        color: white;
    }
</style>

<div class="MessageBox">
    <div class="MessageBox_Title">{msg}<i class='fas fa-times-circle' on:click/></div>
    <div class="MessageBox_Description">{description}</div>
    <span>
        <button class="MessageBox_AcceptBtn btn">Confirm</button>
        <button class="MessageBox_CancelBtn btn">Cancel</button>
    </span>
</div>
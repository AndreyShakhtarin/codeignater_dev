<?
defined('BASEPATH') OR exit('No direct script access allowed');
?>

<html>
<head>
    <title>My Form</title>
    <link rel="stylesheet" href="<?php echo base_url(); ?>assets/bootstrap.css" />
    <link rel="stylesheet" href="<?php echo base_url(); ?>assets/bootstrap.css.map" />
</head>
<body>

<?php //echo validation_errors();?>

<?php echo form_open('form'); ?>

<h5>Username</h5>
<?php $attributes = array("name" => "comment-form");
echo form_open("user_comments/submit", $attributes);?>
<div class="form-group">
    <textarea name="comment" placeholder="Your comments..." rows="4"></textarea>
</div>
<div class="form-group">
    <input type="submit" name="submit" value="Post Comment">
</div>
<?php echo form_close(); ?>
</div>

</body>
</html>
<?
defined('BASEPATH') OR exit('No direct script access allowed');


class Homepage extends  CI_Controller
{
    public function index()
    {
        $this->load->helper(array('form', 'url'));

        $this->load->library('form_validation');

        if ($this->form_validation->run() == FALSE)
        {
            $this->load->view('homepage/homepage');
        }
        else
        {
            $this->load->view('homepage/homepage');
        }
//        $this->load->view( 'homepage/homepage' );
    }
}

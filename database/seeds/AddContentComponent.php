<?php

use App\ContentComponent;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class AddContentComponent extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $data_component = [
            ['themes'=>'newbiz','location'=>1, 'component'=>'intro'],
            ['themes'=>'newbiz','location'=>2, 'component'=>'fitur'],
            ['themes'=>'newbiz','location'=>3, 'component'=>'testimoni'],
            ['themes'=>'newbiz','location'=>4, 'component'=>'contact']
        ];

        ContentComponent::insert($data_component);
    }
}

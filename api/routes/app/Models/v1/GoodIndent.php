<?php

namespace App\Models\v1;
use DateTimeInterface;
use GuzzleHttp\Client;
use Illuminate\Database\Eloquent\Model;
/**
 * @property int user_id
 * @property int identification
 * @property int state
 * @property int odd
 * @property int dhl_id
 * @property string endtime
 * @property string total
 * @property string remark
 * @property int carriage
 * @property int refund_money
 * @property int refund_way
 * @property string pay_time
 * @property int refund_reason
 */
class GoodIndent extends Model
{
    const GOOD_INDENT_STATE_PAY= 1; //状态：待付款
    const GOOD_INDENT_STATE_DELIVER= 2; //状态：待发货
    const GOOD_INDENT_STATE_TAKE= 3; //状态：待收货
    const GOOD_INDENT_STATE_EVALUATE= 4; //状态：待评价
    const GOOD_INDENT_STATE_ACCOMPLISH= 5; //状态：已完成
    const GOOD_INDENT_STATE_CANCEL= 6; //状态：已取消
    const GOOD_INDENT_STATE_REFUND= 7; //状态：已退款
    const GOOD_INDENT_STATE_DELETE= 8; //状态：已删除
    const GOOD_INDENT_IS_DELETE_NO= 0; //是否删除：否
    const GOOD_INDENT_IS_DELETE_YES= 1; //是否删除：是
    const GOOD_INDENT_REFUND_WAY_BALANCE= 0; //退款方式：退到余额
    const GOOD_INDENT_REFUND_WAY_OFFLINE= 1; //退款方式：线下退款
    public static $withoutAppends = true;
    protected $appends = ['state_show'];
    /**
     * Prepare a date for array / JSON serialization.
     *
     * @param  \DateTimeInterface  $date
     * @return string
     */
    protected function serializeDate(DateTimeInterface $date)
    {
        return $date->format('Y-m-d H:i:s');
    }
    /**
     * 获取单张图片
     */
    public function resources(){
        return $this->morphOne('App\Models\v1\Resource', 'image');
    }

    /**
     * 退款方式
     *
     * @return float|int
     */
    public function getRefundWayAttribute()
    {
        if(isset($this->attributes['refund_way'])){
            if(self::$withoutAppends){
                $return='';
            }else{
                switch ($this->attributes['refund_way']){
                    case static::GOOD_INDENT_REFUND_WAY_BALANCE:
                        $return = '退到余额';
                        break;
                    case static::GOOD_INDENT_REFUND_WAY_OFFLINE:
                        $return = '线下退款';
                        break;
                }
            }
            return $return;
        }
    }

    /**
     * 状态
     *
     * @return float|int
     */
    public function getStateShowAttribute()
    {
        if(isset($this->attributes['state'])){
            if(self::$withoutAppends){
                $return='';
            }else{
                switch ($this->attributes['state']){
                    case static::GOOD_INDENT_STATE_PAY:
                        $return = '待付款';
                        break;
                    case static::GOOD_INDENT_STATE_DELIVER:
                        $return = '待发货';
                        break;
                    case static::GOOD_INDENT_STATE_TAKE:
                        $return = '待收货';
                        break;
                    case static::GOOD_INDENT_STATE_EVALUATE:
                        $return = '待评价';
                        break;
                    case static::GOOD_INDENT_STATE_ACCOMPLISH:
                        $return = '已完成';
                        break;
                    case static::GOOD_INDENT_STATE_CANCEL:
                        $return = '已取消';
                        break;
                    case static::GOOD_INDENT_STATE_REFUND:
                        $return = '已退款';
                        break;
                }
            }
            return $return;
        }
    }

    /**
     * 订单总额
     *
     * @return float|int
     */
    public function getTotalAttribute()
    {
        if(isset($this->attributes['total'])){
            if(self::$withoutAppends){
                $return= $this->attributes['total'];
            }else{
                $return= $this->attributes['total']/100;
            }
            return $return>0 ? $return : '';
        }
    }

    /**
     * 退款金额
     *
     * @return float|int
     */
    public function getRefundMoneyAttribute()
    {
        if(isset($this->attributes['refund_money'])){
            if(self::$withoutAppends){
                $return= $this->attributes['refund_money'];
            }else{
                $return= $this->attributes['refund_money']/100;
            }
            return $return>0 ? $return : '';
        }
    }

    /**
     * 运费
     *
     * @return float|int
     */
    public function getCarriageAttribute()
    {
        if(isset($this->attributes['carriage'])){
            if(self::$withoutAppends){
                $return= $this->attributes['carriage'];
            }else{
                $return= $this->attributes['carriage']/100;
            }
            return $return>0 ? $return : '';
        }
    }

    /**
     * 订单总额
     *
     * @param  string  $value
     * @return void
     */
    public function setTotalAttribute($value)
    {
        $this->attributes['total'] = sprintf("%01.2f",$value)*100;
    }

    /**
     * 退款金额
     *
     * @param  string  $value
     * @return void
     */
    public function setRefundMoneyAttribute($value)
    {
        $this->attributes['refund_money'] = sprintf("%01.2f",$value)*100;
    }

    /**
     * 运费
     *
     * @param  string  $value
     * @return void
     */
    public function setCarriageAttribute($value)
    {
        $this->attributes['carriage'] = sprintf("%01.2f",$value)*100;
    }

    /**
     * 获取订单商品列表
     */
    public function goodsList(){
        return $this->hasMany(GoodIndentCommodity::class);
    }

    /**
     * 用户
     */
    public function User(){
        return $this->hasOne(User::class,'id','user_id');
    }

    /**
     * 获取订单收货地址
     */
    public function GoodLocation(){
        return $this->hasOne(GoodLocation::class,'good_indent_id','id');
    }
    /**
     * 物流公司
     */
    public function Dhl(){
        return $this->hasOne(Dhl::class,'id','dhl_id');
    }
}

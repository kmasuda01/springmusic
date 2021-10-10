package com.example.demo;

//入力値を保持するためのフォームクラスを作成します。
//このフォームクラスを入れ物にして、ビュー、コントローラー、クライアントの間のデータのやり取りを行います。
public class Form {
	private Integer id;
	private String chord;
	
	public Integer getId() {
		return id;
	}
	public void setId(Integer id) {
        this.id = id;
    }
    public String getChord() {
        return chord;
    }
    public void setChord(String chord) {
        this.chord = chord;
    }
}

+function($) {
    'use strict'

    let SlideViewer = function(element) {
        this.$element = $(element)
        this.$slides = this.$element.children('.slide-image')
        this.current = 0

        this.showToolbar()
        this.change()
    }

    SlideViewer.prototype.showToolbar = function() {
        let toolbar = $('<div>').addClass('toolbar')
        let pager = this.getPagerHtml()
        this.$prev = this.getChangeSlideIconHtml('prev')
        this.$next = this.getChangeSlideIconHtml('next')
        toolbar.append(this.$prev).append(pager).append(this.$next)
        this.$element.append(toolbar)
    }

    SlideViewer.prototype.getPagerHtml = function() {
        let pager = $('<div>').addClass('slide-pager')
        this.$currentPage = $('<span>').addClass('current-page')
        this.$totalPage = $('<span>').addClass('total-page')
        return pager.append(this.$currentPage).append(' / ').append(this.$totalPage)
    }

    SlideViewer.prototype.getChangeSlideIconHtml = function(direction) {
        let div = $('<div>').addClass('change-slide').addClass(direction).data('direction', direction)
        let icon = $('<span>').addClass(this.getIconClass(direction))
        return div.append(icon)
    }

    SlideViewer.prototype.getIconClass = function(direction) {
        return direction === 'prev' ? 'glyphicon glyphicon-chevron-left' :
               direction === 'next' ? 'glyphicon glyphicon-chevron-right' : ''
    }

    SlideViewer.prototype.change = function(direction) {
        let next = this.getNextSlideNum(direction)
        if(next < 0 || this.$slides.length <= next) return

        this.current = next
        this.reset()
        this.showSlide()
        this.startOrEndDisabled()
        this.changePageNum()
    }

    SlideViewer.prototype.getNextSlideNum = function(direction) {
        return direction === 'prev' ? this.current - 1 :
               direction === 'next' ? this.current + 1 : this.current
    }

    SlideViewer.prototype.reset = function() {
        this.$slides.hide().removeClass('active')
        this.$prev.removeClass('disabled')
        this.$next.removeClass('disabled')
    }

    SlideViewer.prototype.showSlide = function() {
        let $slide = $(this.$slides.get(this.current))
        $slide.show().addClass('active')
    }

    SlideViewer.prototype.startOrEndDisabled = function() {
        if(this.current === 0) this.$prev.addClass('disabled')
        if(this.current === this.$slides.length - 1) this.$next.addClass('disabled')
    }

    SlideViewer.prototype.changePageNum = function() {
        this.$currentPage.text(this.current + 1)
        this.$totalPage.text(this.$slides.length)
    }

    function Plugin(option) {
        return this.each(function() {
            let $this = $(this)
            let data = $this.data('slide-viewer')
            if (!data) $this.data('slide-viewer', (data = new SlideViewer(this, option)))
            if(option && option.change) data.change(option.change)
        })
    }

    let old = $.fn.slideViewer

    $.fn.slideViewer = Plugin
    $.fn.slideViewer.Constructor = SlideViewer

    $.fn.tooltip.noConflict = function () {
        $.fn.tooltip = old
        return this
    }


    $(document).on('click', '.change-slide', function() {
        let $this = $(this)
        let $target = $this.closest('.slide-images')
        let option = { change: $this.data('direction') }
        Plugin.call($target, option)
    })

    $(function() {
        $('.slide-images').slideViewer()
    })

}(jQuery);
